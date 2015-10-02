if defined?(::Rails::Engine)
	module UsertimeRails
	  class Engine < ::Rails::Engine
	    initializer "usertime-rails" do
	      ActiveSupport.on_load(:action_view) do
	        include UsertimeRails::Helper
	      end
	    end
	  end
	end
end