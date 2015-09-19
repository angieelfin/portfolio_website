require "sinatra"
require "dotenv"
require_relative "app.rb"
Dotenv.load


map "/contact" do
  run App::ContactForm
end

set :js_dir, 'javascripts'
set :images_dir, 'images'


configure :build do
end
