const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


// Initializing dashboard
  function init() {
      
      // Dropdown menu
      let dropdownMenu = d3.select("#selDataset");
      
      // Retrieve JSON data
      d3.json(url).then((data)=> {
        console.log(data);
      
          
          let sampleNames = data.names;
          sampleNames.forEach((sampleID) => {
              dropdownMenu.append("option").text(sampleID).property("value",sampleID);
          });
  
          let first_sample = sampleNames[0];
          console.log(first_sample);
  
          // Function to create demographic display, bar chart and bubble chart 
          barChart(first_sample);
          DemographicInfo(first_sample);
          bubbleChart(first_sample);
         
  
      });
  }
  // Function that creates horizontal bar chart
  function barChart(selectedSample) {

    // Retrieve JSON data
    d3.json(url).then((data) => {
      console.log(data);

        // Retrieve sample data
        let sample = data.samples;

         // Filter to match selected sample
        let result = sample.filter(entry => entry.id == selectedSample);

        // first index in array
        let firstIndex = result[0];

        
        // Prepare data for Plotly
        let trace = [{
            x: firstIndex.sample_values.slice(0,10).reverse(),
            y: firstIndex.otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
            text: firstIndex.otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        }];

        // Create a layout for the barchart
        let layout = {
        title: "Top 10 OTUs"
    };

        // Create the Plotly bar chart
        Plotly.newPlot("bar", trace, layout)
    });
  }

  // Creating a function for the bubble chart
  function bubbleChart(selectedSample) {

    // Retrieve JSON data
    d3.json(url).then((data) => {
      console.log(data);
        
        // Sample data 
        let sample = data.samples;

        // Filter to match selected sample
        let result = sample.filter(entry => entry.id == selectedSample);

        // first index in array
        let firstIndex = result[0];
        
        // Create Layout for bubble chart
        let bubbleTrace = [{
            x: firstIndex.otu_ids,
            y: firstIndex.sample_values,
            text: firstIndex.otu_labels,
            mode: "markers",
            marker: {
                size: firstIndex.sample_values,
                color: firstIndex.otu_ids,
                colorscale: "Earth"
            }
        }];

        // Layout
        let layout = {
            xaxis: {title: "OTU ID"},
        };

        // Plot the bubble chart
        Plotly.newPlot("bubble", bubbleTrace, layout)
    });
}
  
  // Displaying Sample metadata
  function DemographicInfo(selectedSample) {
  
      // Retrieve JSON data
      d3.json(url).then((data) => {
        console.log(data);
  
          // Retrieve all metadata
          let metadata = data.metadata;

          // Filter to match selected sample
          let result = metadata.filter(entry => entry.id == selectedSample);          
        
          // first index in array
          let firstIndex = result[0];
  
          // Clear metadata
          d3.select("#sample-metadata").html("");
  
          // Displaying each key-value pair 
          Object.entries(firstIndex).forEach(([key,value]) => {
              d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
          });
      });
  
  }
  
  // Updating all the plots when a new sample is selected
  function optionChanged(selectedSample) {   
      barChart(selectedSample);
      DemographicInfo(selectedSample);
      bubbleChart(selectedSample);
  }
  
  init();