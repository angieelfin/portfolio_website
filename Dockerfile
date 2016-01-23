FROM ruby:2.3.0

# Install program to configure locales
RUN apt-get update -qq && apt-get install -y build-essential locales -qq \
&& locale-gen en_US.UTF-8 en_us && dpkg-reconfigure locales \
&& dpkg-reconfigure locales && locale-gen C.UTF-8 \
&& /usr/sbin/update-locale LANG=C.UTF-8

ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8
ENV LC_ALL C.UTF-8
RUN mkdir /myapp
WORKDIR /myapp
ADD Gemfile /myapp/Gemfile
ADD Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
ADD . /myapp
