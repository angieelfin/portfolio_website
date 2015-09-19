require "roda"
require "slim"
require "json"
require "dotenv"
require_relative "services/mailer"

class App < Roda
  plugin :render, engine: "slim"
  plugin :static, ["/assets"]
  plugin :assets,
    css: %w(all.scss),
    css_opts: { style: :compressed, cache: false },
    compiled_css_dir: "stylesheets",
    compiled_path: nil,
    precompiled: "compiled_assets.json",
    prefix: nil,
    js:%w(jquery-2.1.4.min.js)

  route do |r|
    r.assets
    r.root do
    end
    r.on "contact" do
      r.post do
        begin
          Mailer.call(params)
          status 200
        rescue
          status 400
        end
      end
    end
  end
end
