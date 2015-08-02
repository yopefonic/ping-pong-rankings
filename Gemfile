source 'https://rubygems.org'
ruby "2.1.5"

gem 'rails', '4.1.0'

gem 'thin'

gem 'haml'
gem 'haml-rails'

gem 'dalli' # Caching with memcached

gem 'omniauth-google-oauth2'

group :test, :development do
  gem 'rspec-rails', '~> 2.0'
end

gem 'pg'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails'
  gem 'coffee-rails'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier'
end

group :production do
  gem 'rails_12factor'
  gem 'newrelic_rpm'
end

gem 'jquery-rails'

gem 'bourbon'       # Bourbon - lightweight mixin library
gem 'neat'          # Neat - grid framework

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

group :development do
  gem 'debugger' if ENV['pingpongpanda_debugger']
end

gem 'therubyracer', '~> 0.12.2', :require => 'v8'
