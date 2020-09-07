**Github Link**:<a href="https://github.com/PaarthParekh/Applied-Data-Science-with-Python/blob/master/Second_Course/Assignment4/Assignment4.ipynb">Ann Arbor During Recession</a>
<br><br>
# Introduction
<br><br>
## Purpose:
To look for the effects of recession to the per capita income of an individual and unemployment numbers in the area of Ann Arbor,MI.
<br><br>
### Reason
<br>
My Data Science project was based the broad topic of economic activity or measures for the region of Ann Arbor, Michigan, United States, or the United States.<br>
Economics is a very wide field. While looking for a topic I came across parameters like GDP, recession, the median income, employment, unemployment, cost of living etc. 
I chose this topic to answer my question, how does the recession affect employment and income for an individual, as currently,in 2020, recession has affected many of us.
<br>
### Data Sets used:
1. <a href="https://fredhelp.stlouisfed.org/fred/data/understanding-the-data/recession-bars/">Recession Dates USA</a>
2. <a href="https://www.usinflationcalculator.com/inflation/historical-inflation-rates/">Inflation Rate USA</a>
3. <a href="https://fred.stlouisfed.org/series/LNS13100000">Unemployment Ann Arbor,MI</a>
4. <a href="https://fred.stlouisfed.org/series/CE16OV">Employment Ann Arbor,MI</a>
5. <a href="https://fred.stlouisfed.org/series/ANNA426PCPI">Personal Income Ann Arbor,MI</a>
<br><br>
### Objectives:
* Look for the change in Employment and Unemployment numbers during Recession <br>
* Look for the changes in the Personal Income during Recession<br>
* Adjust the average inflation rate in the United States to look for the change in Income during Recession<br>
* Visualize these characteristics using Data Processing, Data Cleaning and Data Visualizing techniques using Python<br>
<br><br><br>
## Data Visualization
<br>
**Employment and Unemployment Numbers over the years** <br>
After reading in and cleaning the data, we first visualize the number of people Employed and Unemployed over the years. 
<img src="images/MI/Employment_Ann_Arbor.jpg?raw=true"/> <br>
Then we see the difference in numbers with maximum difference being seen during the recession.
<img src="images/MI/Diff_Employment.jpg?raw=true"/> <br>
<br><br>
**Personal Income over the years** <br>
After reading in and cleaning the data, we visualized the Average Personal Income over the years. We see there is an increase as we go higher<br>
<img src="images/MI/Personal_Income.jpg?raw=true"/> <br>
I further visualized the income during the recession years, but as we see the income kept on increasing irrespective of the recession years.
<img src="images/MI/Personal_Income.jpg?raw=true"/> <br>
<br><br>
**Inflation Adjusted**
<br>
Things start getting interesting when we adjust the personal income based on the previous year of the avg. Inflation Rate. Here as we see,
the adjusted income difference goes down especially during Recession except for 2009, when the economy was also recovering back. <br>
<img src="images/MI/Income_inflation.jpg?raw=true"/> <br>
<br><br>
**Final Image**
<br>
I decided to follow Cairo's Principles for to show the best possible image: <br>
- To follow Cairo's principle of Truthfulness, I posted the sites from where I have got the numbers and the data, with minimal manipualtion which I have described above. <br>
- I followed Cairo's principle of beauty, by adding different colours to represent the Recession and Non Recession years. I have provide a legend along with the apt description on the label to give description of what is on each label. There is a title shown as well. <br>
- The bar plot is in the background to give functionality to my visualization where the user can easily grasp the information the difference in employment numbers during Recession and Non Recession years. In the front there is the income adjustted with the inflation rate. <br>
- The entire graph is insightful because it gives the user the details quickly, while showing them the trend easily during the Recession years, how income and employment numbers are affected.
<img src="images/MI/Final_assignment.jpg?raw=true"/> <br>