# Rakefile

require 'jekyll'

task default: %w[build]

desc "Build the site"
task :build do
  config = Jekyll.configuration({
    google_analytics_id: ENV["GOOGLE_ANALYTICS_ID"],
  })
  site = Jekyll::Site.new(config)
  Jekyll::Commands::Build.build(site, config)
end
