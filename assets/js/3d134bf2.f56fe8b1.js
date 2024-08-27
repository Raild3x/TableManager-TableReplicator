"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1820],{90779:e=>{e.exports=JSON.parse('{"functions":[{"name":"RegisterSignal","desc":"Registers a signal to the component.","params":[{"name":"signalName","desc":"The name of the signal to register.","lua_type":"string"}],"returns":[{"desc":"The signal that was registered.","lua_type":"Signal"}],"function_type":"method","source":{"line":64,"path":"lib/basecomponent/src/init.lua"}},{"name":"GetSignal","desc":"Gets a signal from the component.","params":[{"name":"signalName","desc":"The name of the signal to get.","lua_type":"string"}],"returns":[{"desc":"The signal that was retrieved.","lua_type":"Signal"}],"function_type":"method","source":{"line":83,"path":"lib/basecomponent/src/init.lua"}},{"name":"FireSignal","desc":"Fires a signal from the component.","params":[{"name":"signalName","desc":"The name of the signal to fire.","lua_type":"string"},{"name":"...","desc":"The arguments to pass to the signal.","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":102,"path":"lib/basecomponent/src/init.lua"}},{"name":"Constructing","desc":"","params":[{"name":"component","desc":"","lua_type":"any"}],"returns":[],"function_type":"static","ignore":true,"source":{"line":141,"path":"lib/basecomponent/src/init.lua"}},{"name":"Stopped","desc":"","params":[{"name":"component","desc":"","lua_type":"any"}],"returns":[],"function_type":"static","ignore":true,"source":{"line":157,"path":"lib/basecomponent/src/init.lua"}},{"name":"ObserveProperty","desc":"Watches for when the property changes and calls the callback. Also calls the callback initially with the current value","params":[{"name":"propertyName","desc":"The name of the property to observe","lua_type":"string"},{"name":"callback","desc":"The function to call when the property changes","lua_type":"((newValue: any) -> ())"}],"returns":[{"desc":"A function to disconnect the observer","lua_type":"function"}],"function_type":"method","source":{"line":53,"path":"lib/basecomponent/src/ComponentPropertyUtil.lua"}},{"name":"OutProperty","desc":"Fetches an property and turns into into a synchronized usable value","params":[{"name":"propertyName","desc":"The name of the property to fetch","lua_type":"string"}],"returns":[{"desc":"The synchronized fusion value of the property","lua_type":"Value<any>"}],"function_type":"method","source":{"line":80,"path":"lib/basecomponent/src/ComponentPropertyUtil.lua"}},{"name":"PropertyChanged","desc":"Fetches the PropertyChanged signal for the property if no function is given.\\nIf a function is provided, it will connect the function to the property changed signal and return the connection","params":[{"name":"propertyName","desc":"The name of the property to observe","lua_type":"string"},{"name":"fn","desc":"The function to call when the property changes","lua_type":"((...any) -> ())?"},{"name":"connectOnce","desc":"If true, the function will only be called the first time the property changes","lua_type":"boolean?"}],"returns":[{"desc":"A connection or signal","lua_type":"RBXScriptConnection | RBXScriptSignal"}],"function_type":"method","source":{"line":110,"path":"lib/basecomponent/src/ComponentPropertyUtil.lua"}},{"name":"AddPromise","desc":"Adds a promise to the component\'s janitor. Returns the same promise that was given.","params":[{"name":"promise","desc":"","lua_type":"Promise<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":50,"path":"lib/basecomponent/src/ComponentJanitorUtil.lua"}},{"name":"AddTask","desc":"Adds a task to the component\'s janitor.","params":[{"name":"task","desc":"","lua_type":"T"},{"name":"cleanupMethod","desc":"","lua_type":"(string | true)?"},{"name":"index","desc":"","lua_type":"any?"}],"returns":[{"desc":"The same task that was given","lua_type":"T"}],"function_type":"method","source":{"line":65,"path":"lib/basecomponent/src/ComponentJanitorUtil.lua"}},{"name":"RemoveTaskNoClean","desc":"Removes a task from the component\'s janitor without cleaning it.","params":[{"name":"index","desc":"The index of the task to remove.","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":77,"path":"lib/basecomponent/src/ComponentJanitorUtil.lua"}},{"name":"RemoveTask","desc":"Removes a task from the component\'s janitor.","params":[{"name":"index","desc":"The id of the task to remove.","lua_type":"any"},{"name":"dontClean","desc":"Optional flag to not clean the task.","lua_type":"boolean?"}],"returns":[],"function_type":"method","source":{"line":90,"path":"lib/basecomponent/src/ComponentJanitorUtil.lua"}},{"name":"GetTask","desc":"Gets a task from the janitor.","params":[{"name":"index","desc":"The id of the task to get.","lua_type":"any"}],"returns":[{"desc":"The task that was retrieved.","lua_type":"any"}],"function_type":"method","source":{"line":106,"path":"lib/basecomponent/src/ComponentJanitorUtil.lua"}},{"name":"GetAttribute","desc":"Fetches the current Value of an attribute on the Component Instance","params":[{"name":"attributeName","desc":"The name of the attribute to fetch","lua_type":"string"}],"returns":[{"desc":"The current value of the attribute","lua_type":"any?"}],"function_type":"method","source":{"line":61,"path":"lib/basecomponent/src/ComponentAttributeUtil.lua"}},{"name":"SetAttribute","desc":"Sets an attribute of this Component\'s instance to a value","params":[{"name":"attributeName","desc":"The name of the attribute to set","lua_type":"string"},{"name":"value","desc":"The value to set the attribute to","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":75,"path":"lib/basecomponent/src/ComponentAttributeUtil.lua"}},{"name":"IncrementAttribute","desc":"Increments the current value of the attribute by the increment. If no increment is provided, it defaults to 1","params":[{"name":"attributeName","desc":"The name of the attribute to increment","lua_type":"string"},{"name":"increment","desc":"The amount to increment the attribute by. Defaults to 1","lua_type":"number?"}],"returns":[{"desc":"The new value of the attribute","lua_type":"number"}],"function_type":"method","source":{"line":89,"path":"lib/basecomponent/src/ComponentAttributeUtil.lua"}},{"name":"UpdateAttribute","desc":"Updates the current value of the attribute into a new value from the return of the mutator function","params":[{"name":"attributeName","desc":"The name of the attribute to mutate","lua_type":"string"},{"name":"mutator","desc":"The function to mutate the attribute with","lua_type":"((value: any) -> (any))"}],"returns":[{"desc":"The new value of the attribute","lua_type":"any"}],"function_type":"method","source":{"line":107,"path":"lib/basecomponent/src/ComponentAttributeUtil.lua"}},{"name":"ObserveAttribute","desc":"Watches for when the attribute changes and calls the callback. Also calls the callback initially with the current value","params":[{"name":"attributeName","desc":"The name of the attribute to observe","lua_type":"string"},{"name":"callback","desc":"The function to call when the attribute changes","lua_type":"((newValue: any) -> ())"}],"returns":[{"desc":"A function to disconnect the observer","lua_type":"function"}],"function_type":"method","source":{"line":124,"path":"lib/basecomponent/src/ComponentAttributeUtil.lua"}},{"name":"OutAttribute","desc":"Fetches an attribute and turns into into a synchronized usable value","params":[{"name":"attributeName","desc":"The name of the attribute to fetch","lua_type":"string"}],"returns":[{"desc":"The synchronized fusion value of the attribute","lua_type":"Value<any>"}],"function_type":"method","source":{"line":151,"path":"lib/basecomponent/src/ComponentAttributeUtil.lua"}},{"name":"DefaultAttribute","desc":"Sets an attribute to a default value if it is not already set, allows for type checking of the initial value","params":[{"name":"attributeName","desc":"The name of the attribute to set","lua_type":"string"},{"name":"value","desc":"The value to set the attribute to","lua_type":"any"},{"name":"validDataTypes","desc":"A list of valid data types for the attribute","lua_type":"{string}?"}],"returns":[{"desc":"The value of the attribute","lua_type":"any"}],"function_type":"method","source":{"line":181,"path":"lib/basecomponent/src/ComponentAttributeUtil.lua"}},{"name":"AttributeChanged","desc":"Fetches the AttributeChanged signal for the attribute if no function is given.\\nIf a function is provided, it will connect the function to the attribute changed signal and return the connection","params":[{"name":"attributeName","desc":"The name of the attribute to observe","lua_type":"string"},{"name":"fn","desc":"The function to call when the attribute changes","lua_type":"((...any) -> ())?"}],"returns":[{"desc":"A function to disconnect the observer or the signal","lua_type":"RBXScriptConnection | RBXScriptSignal"}],"function_type":"method","source":{"line":208,"path":"lib/basecomponent/src/ComponentAttributeUtil.lua"}}],"properties":[],"types":[],"name":"BaseComponent","desc":"A Component Extension which applies simple Janitor, Attribute, and Signal functionality to a component.\\nAlso adds a way to check if a Component has been destroyed.\\n\\nExtends **ComponentJanitorUtil** and **ComponentAttributeUtil**.\\nCheck their documentation for more information.","source":{"line":14,"path":"lib/basecomponent/src/init.lua"}}')}}]);