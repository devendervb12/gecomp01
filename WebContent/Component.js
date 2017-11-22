

// creating our own component
sap.ui.core.UIComponent.extend("ge.in.Component", {
	//sap.ui.localResources("view");
	metadata : {
		rootView : "ge.in.view.View1",
		routing : {
			config : {
				routerClass : "sap.m.routing.Router"
			},
			routes : [
				{
					pattern : "", //when
					name : "pageInital",
					viewName : "ge.in.view.Page1",
					viewType : "XML",
					controlId : "idApp",
					controlAggregation : "pages"
				},
				{
					pattern : "page2", //when
					name : "pageInital2",
					viewName : "ge.in.view.Page2",
					viewType : "XML",
					controlId : "idApp",
					controlAggregation : "pages"
				},
				{
					pattern : "page3", //when
					name : "pageInital3",
					viewName : "ge.in.view.Page3",
					viewType : "XML",
					controlId : "idApp",
					controlAggregation : "pages"
				}
				
			]
		}
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		this.getRouter().initialize();
	}
});










