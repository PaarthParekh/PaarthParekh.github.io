**Github Link**:<a href="https://github.com/PaarthParekh/HIV_Smokers">HIV_Smokers</a>
# Introduction
## Purpose:
Develop a machine learning model using the differentially obtained methylation sites between smokers and non smokers to predict the poor outcomes using the VACS index.  
## Description :
<img src="images/DMR/Description_data.png?raw=true"/>

## Objectives:
* Obtain the common list of CPG sites between the Illumina 450K and EPIC 870K platforms. (408,583 CpGs shared between both the platforms). <br>
* Obtain the list of differentially methylated CPG sites between smokers and non-smokers ( and look for other useful characteristics) for both the discovery cohort and the replication cohort. <br>
* Using data processing techniques to clean the data and obtain the file files which can be used to fit the model. <br>
* Use these sites and other charactersitics obtained to predict the poor outcomes using VACS index. <br>
<br><br><br>
## Data Processing
**Data Distribution and Pre processing** <br>
Insted of looking at box plots for individual samples, we look at the descriptive statisctical parameters distribution. The preprocessed data from GEOdataset has been quantile normalized.
<img src="images/DMR/Descriptive_Stats_pict.png?raw=true"/> <br>
<img src="images/DMR/mean_variance.png?raw=true"/> <br>
<img src="images/DMR/log_transform_mean_variance.png?raw=true"/> <br>
<br>
**DMRcate** <br>
For obtaining the differentially methylated regions we looked at different methods. Methods developed DMRs in recent years were: <br>
<img src="images/DMR/DMR_stats.png?raw=true"/> <br>
Went ahead with DMRcate for two reasons,
* First it was a recently developed tool in 2015. <br>
* Second it had good number of citations. <br>
<br>
Coming to DMRcate, here is a picture describing the working of DMRcate in a cancer vs normal methylated sites. <br>
<img src="images/DMR/DMRcate.png?raw=true"/>
<br><br>
***DMRCate Parameters:*** <br>
DMRcate can work with Beta values or M values generated from Illumina Arrays <br>
* Beta values: M/(U+M+𝛼) (values obtained from NCBI Geodatasets) <br>
* M values: log equivalent of Beta values <br> (we didn't opt for M values cause in the mean variance plot obtained above we can see a shift in the biasness)
* Filtered 408576 probes common to both HM450 and EPIC Arrays <br>
* Annotating probes, design matrix specifying smoking status, needed for finding DMRs <br>
* FDR = 0.05 <br>
* lambda to define the length of the sliding frame (we used 500 bp) <br>
* C=2, suggesting 250bp(lamba/C) as the length to look at both sides of each cpg to find correlating probes <br>
<br> <br>
***Results obtained for DMRcate*** <br>
Discovery Cohort: <br>
* 872 Cpg sites <br>
* 197 DMRs <br>
Replication Cohort: <br>
* 1651 Cpg sites <br>
* 385 DMRs <br>
<br><br><br>
There are 237 Cpg sites common in both Discovery and Replication Cohort, out of which top 51 are most significant in both cohorts.
Concentrated on these 51 and 237 Cpg probes for further analysis. <br>

**Pathway Analysis on Common DMRs using Reactome** <br>
<img src="images/DMR/Affected_Pathways.png?raw=true"/>

**Unsupervised Feature selection**<br>
We looked at Unsupervised probes selection based on Mean Variances plot and we also did PCA analysis, where we saw a distinction between the race, Black , White and others.<br>
<img src="images/DMR/Unsupervised_probes.png?raw=true"/> <br>
<img src="images/DMR/Race_seperation.png?raw=true"/> <br>
<br><br><br>
## Model Fitting <br>
**Outcome Prediction** <br>
We found 231 common CPG sites between discovery and replication cohort which were differentially methylated between Smokers and Non-Smokers. <br>
Using these CPG sites, we decided to train a model to predict the VACS index. <br>
We received the VACS index for the discovery cohort from the authors. <br>
The paper had used a classification method to indicate that VACS index above 50 were significant for poor outcomes (“1”) and below 50 VACS index were not (“0”). <br>
We looked at the Correlation matrix of different features to fit a model to predict the VACS index using regression techniques. We didnt find any linear relations and the *results were poor* with none of the features having a relation of above 0.2. <br>
<br>
We decided to make it into a classification problem, due to the shortage of time, classifying the VACS index as the authors of the paper had followed. <br>
**Data Distribution**<br> 
Before going into the classification, the data distribution of VACS index above 50 and the vacs index below 50 was unbalanced. The paper tackled this problem using an Ensemble model. <br>
<img src="images/DMR/VACS_Index.png?raw=true"/> <br>
I wanted to take a different approach and looked at SMOTE, a oversampling method to increase the number of instances for the minority class. SMOTE first selects a minority class instance a at random and finds its k nearest minority class neighbors. <br>
<img src="images/DMR/SMOTE.png?raw=true"/> <br>
The synthetic instance is then created by choosing one of the k nearest neighbors b at random and connecting a and b to form a line segment in the feature space. The synthetic instances are generated as a convex combination of the two chosen instances a and b. <br>
**SVM** <br>
I looked at different kernels for SVM, which could be useful for our analysis. GOing through the literature I came across the brilliant example of the iris dataset with two features which described the different kernels prfectly. <br>
<img src="images/DMR/SVM_Petal.png?raw=true"/> <br>
We tried out different kernels, splitting the data in a stratified manner expecting the polynomial kernel to give the best results, but the linear kernel with the C value as 1 gave the best results.  <br>
**Results**:
We did 10-fold cross validation with the linear kernel and obtained the following results. <br>
Results: <br>
• SVM Precision mean: 0.6295286 <br>
• SVM Recall mean: 0.902137973 <br>
• SVM Accuracy mean: 0.77366300 <br>

These results were already better than the ones obtained in the paper, but since one bioinformatics paper related to SMOTE (Blagus, R., & Lusa, L. (2013). SMOTE for high-dimensional class-imbalanced data. BMC Bioinformatics, 14(1). doi: 10.1186/1471-2105-14-106) published the results that with the oversampling data,SMOTE, gives the best results with KNN clustering. <br>
**KNN clustering** <br>
Obtained a graph of KNN accuracy with different number of neighbours from 1 to 40. <br>
Graph obtained was: <br>
<img src="images/DMR/KVM_diff_neig.png?raw=true"/> <br>
I got stable results from 25 clusters and decided to use the SMOTE data to get the best results. <br>
Results obained <br>
• Accuracy: 0.6376811594202898 <br>
• Precision: 0.42857142857142855 <br>
• Recall: 0.2608695652173913 <br>
<br><br><br>
## Future Analysis
After a run of trying out different prediction models and understanding the methylation data better, there are several improvements that can lead to better accuracy or performance of the models. Following are a few improvements or areas that can be improved. <br>
• As there is differential clustering in PCA analysis between races, it would be best to divide the data and try out prediction to avoid poor performance or accuracy. <br>
• We can use the unsupervised sites which we used and try to build a model and try to predict the VACs index rather than poor outcomes. <br>
• We can use an Ensemble based model with oversampling the data and look at the results for the model. <br>
We also understand that when it comes to biology, methylation is just one part of the whole picture where other parts like genomics, transcriptomics, proteomics and metabolomics can also play a role in determining the poor outcome of an individual. <br>
