var MyJSPlugin = {
    
    SetRetValue: function(index, value)
    {
	window.InterJSPlugin.SetRetValue(index, Pointer_stringify(value));
    }, 

    OnRotationPlay: function()
    {
	window.InterJSPlugin._OnRotationPlay();
    },
    OnRotationStop: function()
    {
	window.InterJSPlugin._OnRotationStop();
    },

    OnChangeColor: function(color)
    {
	window.InterJSPlugin._OnChangeColor(Pointer_stringify(color));
    },

    OnLoad: function()
    {
	window.InterJSPlugin._OnLoad();
    }

};

mergeInto(LibraryManager.library, MyJSPlugin);
