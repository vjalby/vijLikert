
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"liks","title":"Likert Variables","type":"Variables"},{"name":"group","title":"Grouping Variable","type":"Variable"},{"name":"type","title":"Plot Type","type":"List","options":[{"title":"Centered","name":"centered"},{"title":"Stacked","name":"stacked"}],"default":"centered"},{"name":"groupBy","title":"Group By","type":"List","options":[{"title":"Variable","name":"variable"},{"title":"Group","name":"group"}],"default":"variable"},{"name":"sorting","title":"Sorting","type":"List","options":[{"title":"None","name":"none"},{"title":"Ascending","name":"ascending"},{"title":"Descending","name":"descending"}],"default":"none"},{"name":"addLabels","title":"Show % Labels","type":"Bool","default":true},{"name":"addTotals","title":"Show positive and negative totals (Centered Only)","type":"Bool","default":true},{"name":"addMedianLine","title":"Show 50% vertical line (Stacked Only)","type":"Bool","default":true},{"name":"reverseLikert","title":"Reverse the staking order","type":"Bool","default":false},{"name":"jamoviTheme","title":"use Jamovi Plot Theme","type":"Bool","default":false}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "Likert Plots",
    jus: "3.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			typeName: 'VariableSupplier',
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Likert Variables",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "liks",
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Grouping Variable",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "group",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					typeName: 'ComboBox',
					name: "type"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					typeName: 'ComboBox',
					name: "groupBy"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					typeName: 'ComboBox',
					name: "sorting"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "addLabels"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "addTotals"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "addMedianLine"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "reverseLikert"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "jamoviTheme"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
