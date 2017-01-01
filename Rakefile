require "rake"

namespace :assets do
  desc "Precompile the assets"
  task :precompile do
    require "slim"
    require './app'
    App.compile_assets
  end
end
