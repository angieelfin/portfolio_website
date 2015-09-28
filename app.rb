require "roda"
require "slim"
require "json"
require "pony"
require "dotenv"
require_relative "services/mailer"
Dotenv.load

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
    js:%w(jquery-2.1.4.js all.js)


  route do |r|
    r.assets

    r.root do
      view("index")
    end

    r.on "gallery" do
      r.on "web" do
        view("gallery/web")
      end

      r.on "graphic" do
        view("gallery/graphic")
      end

      r.on "art" do
        view("gallery/art")
      end
    end

    r.on "contact" do
      r.post do
        payload = r.body.read.to_s
        params = Rack::Utils.parse_nested_query(payload)
        begin
          Mailer.call(params)
          response['Content-Type'] = 'application/json'
          response.write('{}')
          response.status = 200
        rescue Exception => e
          response['Content-Type'] = 'application/json'
          response.write('{}')
          response.status = 422
        end
        {}
      end
    end
  end
end
