module UsertimeRails
  module Helper
    def usertime_tag(time, options = nil)
      time = (time.to_f * 1000).to_i if time.is_a? Time
      content_tag(:usertime, time, options)
    end
  end
end
