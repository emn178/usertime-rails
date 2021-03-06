# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'usertime-rails/version'

Gem::Specification.new do |spec|
  spec.name          = "usertime-rails"
  spec.version       = UsertimeRails::VERSION
  spec.authors       = ["Chen Yi-Cyuan"]
  spec.email         = ["emn178@gmail.com"]

  spec.summary       = %q{A jQuery plugin provides to display time in user's timezone.}
  spec.description   = %q{A jQuery plugin provides to display time in user's timezone.}
  spec.homepage      = "https://github.com/emn178/usertime-rails"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.10"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "actionview"
  spec.add_development_dependency "rspec"
  spec.add_development_dependency "rspec-its"
end
