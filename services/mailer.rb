class Mailer
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def self.call(params)
    new(params).call
  end

  def call
      Pony.mail({
        :to => ENV['MAIL_CLIENT'],
        :via => :smtp,
        :body => params['body'],
        :from => params['email'],
        :subject => "#{params['name']} | #{params['email']}",
        :via_options => {
          :address        => 'smtp.gmail.com',
          :port           => '587',
          :enable_starttls_auto => true,
          :user_name      => ENV['LdOGIN'],
          :password       => ENV['PASSWORD'],
          :authentication => :plain,
          :domain         => ENV['DOMAIN']
        }
      })
  end
end
