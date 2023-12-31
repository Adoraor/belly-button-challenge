# belly-button-challenge

## Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions
Complete the following steps:

  1) Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
  
  2) Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  - Use sample_values as the values for the bar chart.
  
  - Use otu_ids as the labels for the bar chart.
  
  - Use otu_labels as the hovertext for the chart.
 
    <img width="496" alt="image" src="https://github.com/Adoraor/belly-button-challenge/assets/90076518/2f597260-2b99-470e-b47a-a532e6daf8ec">

  3) Create a bubble chart that displays each sample.

  - Use otu_ids for the x values.
  
  - Use sample_values for the y values.
  
  - Use sample_values for the marker size.
  
  - Use otu_ids for the marker colors.
  
  - Use otu_labels for the text values.

    <img width="555" alt="image" src="https://github.com/Adoraor/belly-button-challenge/assets/90076518/0623463b-f0d8-4d1e-bfbb-d432b3572762">

  4) Display the sample metadata, i.e., an individual's demographic information.

  5) Display each key-value pair from the metadata JSON object somewhere on the page.

     <img width="241" alt="image" src="https://github.com/Adoraor/belly-button-challenge/assets/90076518/edac392d-4679-441e-8b1a-2ed087e6ceee">

  6) Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

     <img width="540" alt="image" src="https://github.com/Adoraor/belly-button-challenge/assets/90076518/6ebb288e-a5af-46e2-9580-64fec9cf52f7">

  7) Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/


