export default containerElement => {
    
    (function(window){
    
        'use strict';

        function unityPlugin() {

            var tdx = {};

            var MAX_INDEX = 100000;
		    var retval = Array(MAX_INDEX + 1).fill();
            var retindex = 0;
        
            function getRetIndex()
            {
                return (retindex >= MAX_INDEX)?0:retindex++;
            }
            function getRetValue(index)
            {
                var value = retval[index];
                delete retval[index];
                return value;
            }
            function sendMessage(func_name, param)
            {
                
                if (typeof gameInstance === "undefined") {
                    console.log("Error : " + func_name);
                    return;
                }

                console.log("Send Message : " + func_name);
                //console.log(gameInstance);

                gameInstance.SendMessage("SceneManager", func_name, param);

                return true;
            }
            
            function makeParam()
            {
                var param = {
                    index: arguments[0],
                    args: null
                };

                if (arguments.length > 1 && arguments[1] !== null)
                {
                    param.args = arguments[1];
                }
                
                return JSON.stringify(param);
            }

            // Utility
            tdx.SetRetValue = function(index, value)
            {
                retval[index] = value;
            };

            // Events
            tdx.OnLoad = function(callback)
            {
                return callback;
            };
            tdx._OnLoad = function()
            {
                this.OnLoad();
            };

            tdx.OnRotationPlay = function(callback)
            {
                return callback;
            };
            tdx._OnRotationPlay = function()
            {
                this.OnRotationPlay();
            };

            tdx.OnRotationStop = function(callback)
            {
                return callback;
            };
            tdx._OnRotationStop = function()
            {
                this.OnRotationStop();
            };

            tdx.OnChangeColor = function(callback)
            {
                return callback;
            };
            tdx._OnChangeColor = function(attr)
            {
                this.OnChangeColor(attr);
            };

            // Methods
            tdx.GetTankProperty = function()
            {
                var index = getRetIndex();
                var propName = arguments[0];
                sendMessage("GetTankProperty", makeParam(index, propName));
                return getRetValue(index);
            };

            tdx.GetTankColor = function()
            {
                var index = getRetIndex();
                sendMessage("GetTankColor", makeParam(index));
                return getRetValue(index);
            };
            tdx.SetTankColor = function()
            {
                var color = arguments[0];
                sendMessage("SetTankColor", makeParam(-1, color));
            };
            
            tdx.GetTitle = function()
            {
                var index = getRetIndex();
                sendMessage("GetTitle", makeParam(index));
                return getRetValue(index);
            };
            tdx.SetTitle = function()
            {
                const title = arguments[0];
                sendMessage("SetTitle", makeParam(-1, title));
                
            };

            tdx.GetRank = function()
            {
                var index = getRetIndex();
                sendMessage("GetRank", makeParam(index));
                return getRetValue(index);
            };
            tdx.SetRank = function()
            {
                const rank = arguments[0];
                sendMessage("SetRank", makeParam(-1, rank));
            };

            tdx.GetPower = function()
            {
                var index = getRetIndex();
                sendMessage("GetPower", makeParam(index));
                return getRetValue(index);
            };
            tdx.SetPower = function()
            {
                var power = arguments[0];
                sendMessage("SetPower", makeParam(-1, power));
            };

            tdx.GetArmor = function()
            {
                var index = getRetIndex();
                sendMessage("GetArmor", makeParam(index));
                return getRetValue(index);
            };
            tdx.SetArmor = function()
            {
                var armor = arguments[0];
                sendMessage("SetArmor", makeParam(-1, armor));
            };

            tdx.GetSpeed = function()
            {
                var index = getRetIndex();
                sendMessage("GetSpeed", makeParam(index));
                return getRetValue(index);
            };
            tdx.SetSpeed = function()
            {
                var speed = arguments[0];
                sendMessage("SetSpeed", makeParam(-1, speed));
            };

            tdx.Play = function()
            {
                sendMessage("Play", makeParam(-1, arguments));
            };

            tdx.Stop = function()
            {
                sendMessage("Stop", makeParam(-1, arguments));
            };
            
            Object.defineProperty(tdx.SetRetValue, "name", { value: "SetRetValue" });

            return tdx;
            
        }
        
        if(typeof(window.InterJSPlugin) === 'undefined'){
            window.InterJSPlugin = unityPlugin();
        }
        
    })(window);
    
    const id = containerElement.id;
    var gameInstance = UnityLoader.instantiate(id, "/data/Build.json");
    
    function getPluginContext() {
        return window.InterJSPlugin;
    }

    return {
        getPluginContext,
    }
}