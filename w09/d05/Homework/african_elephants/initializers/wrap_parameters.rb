ActiveSupport.on_load(:action_controller) do 
	wrao_parameters format: [:json] if respond_to?(:wrap_parameters)
	
end