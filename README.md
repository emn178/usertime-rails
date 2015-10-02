# usertime-rails

[![Build Status](https://api.travis-ci.org/emn178/usertime-rails.png)](https://travis-ci.org/emn178/usertime-rails)
[![Coverage Status](https://coveralls.io/repos/emn178/usertime-rails/badge.svg?branch=master)](https://coveralls.io/r/emn178/usertime-rails?branch=master)

A jQuery plugin provides to display time in user's timezone. (See [usertime.js](https://github.com/emn178/usertime.js))

## Dependencies
usertime.js requires moment.js library, please add this library first.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'usertime-rails'
```

And then execute:

    bundle

Or install it yourself as:

    gem install usertime-rails

## Usage

### Require Javascript
Add the following to /app/assets/javascripts/application.js:
```JavaScript
//= require usertime
```
### Helpers
You can use `usertime_tag` to wrap Time objects.
```ruby
usertime_tag(Time.now)
```
It will output:
```HTML
<usertime>1441099707000</usertime>
```
You can specify format:
```ruby
usertime_tag(Time.now, :format => 'lll')
```
Output:
```HTML
<usertime format="lll">1441099707000</usertime>
```
Notice this format is [moment.format](http://momentjs.com/docs/#/displaying/format/), not ruby format.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/usertime-rails  
Author: emn178@gmail.com
