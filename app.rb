module App
  class ContactForm < Sinatra::Base
    require_relative 'services/mailer.rb'

    post "" do
      begin
        Mailer.call(params)
        status 200
      rescue
        status 400
      end
    end
  end
end
