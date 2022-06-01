class ApplicationController < ActionController::Base
    def react 
        @value = 'just testing';
        return render "react/index", :layout => 'application'
    end   
end
