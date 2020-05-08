# Introduction
### Purpose:
Investigate an unknown outbreak pathogen using raw genome sequence data from the Centers for Disease Control and Prevention (CDC) foodborne illness surveillance outbreak investigations
<img src="images/GenePrediction/Gene_Prediction_CDC.png?raw=true"/>
<br>
<img src="images/GenePrediction/Gene_Prediction_Description.jpg?raw=true"/>
### Objective:
From assembled genomes, predict genes or features using different prediction methods and evaluate selected tools on their accuracy and performance

**What is Gene Prediction?** <br>
Identification of the regions of genomic DNA that encode genes, which are fragments of DNA that encodes a functional molecule: <br>
* Protein-coding genes <br>
* RNA genes <br>
* May also include other functional elements (i.e. regulatory regions) <br>

**Prokaryotic Genome** <br>
Prokaryotic Genomes have a high gene density and do not contain introns in their protein-coding regions. Genes are called Open Reading Frames or “ORFs” (include start & stop codon). Prediction of prokaryotic genes tends to be relatively simpler with contiguous ORFs. However, overlapping ORFs and short genes can cause issues. ''Each gene is an ORF, but not every ORF is a gene.'' <br>
<img src="images/GenePrediction/Gene_Prediction.jpg?raw=true"/> <br>
 
 **Ab Initio Methods** <br>
* Inspect the input sequence and searches for traces of gene presence <br>
* Simplest method is to inspect ORFs <br>
* Relies on probability models & specific DNA motifs (signals) <br>
* Markov Models and Dynamic Programming <br>

Three Campylobacter jejuni reference genomes were used to evaluate tools and combination of tools. <br>
The predicted genes were blasted against database made up of reference genome protein sequence to and evaluated on the following parameters: <br>
TP = True Positive <br>
FP = False Positive <br>
FN = False Negative <br>
SE = TP / (TP+FN) <br>
PPV = TP / (TP+FP) <br>
Accuracy = TP / (TP+FP+FN) <br>

<img src="images/GenePrediction/Testing_results.png?raw=true"/> <br>

SE was the highest for PRODIGAL + GMS-2 and marginally higher for combined prediction than single tool prediction <br>
PRODIGAL + GMS-2 SE: 99.4% <br>
PPV was the highest for PRODIGAL <br> 
PRODIGAL PPV: 88.1% <br>
Accuracy was the highest for PRODIGAL + GMS-2 (union) <br>
PRODIGAL + GMS-2 PPV: 86.0% <br>

<img src="images/GenePrediction/Graph_results.png?raw=true"/> <br>

Based on our preliminary testing on 3 reference genomes of Campylobacter jejuni, merging GeneMarkS-2 and PRODIGAL predictions ("union") was selected as the best Ab-initio method for our organism. <br>

**Validate our results** <br>
To validate our results we used  <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE_TYPE=BlastDocs&DOC_TYPE=Download">BLAST</a> to seperate out the known and unknown hits in the list of genes obtained by Ab Initio tools. <br>

**Database Selection** <br>
The sequences were obtained from the [https://www.ncbi.nlm.nih.gov/refseq/ RefSeq] bacteria database since it is a BLAST accessible database that provides a "comprehensive, integrated, non-redundant, well-annotated set of sequences, including genomic DNA, transcripts, and proteins." It presents a stable reference for genome prediction as well as genome annotation which would assist the Functional Annotation group. <br>
The database contains 'Campylobacter jejuni' as well as 'Campylobacter coli' data since these two are considered to be the most important enteropathogens among the ''Campylobacter'' spp. In addition, ''C. jejuni'' and ''C. coli'' have a strong relationship since they deviate from the same common ancestor. <br>
<img src="images/GenePrediction/Relation_Database.png?raw=true"/> <br>

### Non Coding Tools
* Non-coding RNA (ncRNA) is an RNA molecule that is not translated into a protein <br>
* Transfer RNAs (tRNAs), ribosomal RNAs (rRNAs) and small RNAs(sRNAs) <br>
* Protein synthesis/Translation (tRNA and rRNA) & gene regulation (sRNA) <br>
* Related to antibiotic resistance <br>
<img src="images/GenePrediction/NC_differenttypes.png?raw=true"/> <br>

<a href="http://130.235.244.92/ARAGORN/">ARAGON</a> <br>
* Homology based tool <br>
* Uses heuristic algorithms that score the tRNA and tmRNA genes based on their sequence and secondary structure similarities <br>
* An effective '''tRNA''' search program, with sensitivity better than other current heuristic tRNA search algorithms <br>

<a href="http://www.cbs.dtu.dk/services/RNAmmer/">RNAmmer</a> <br>
* Ab Initio based tool <br>
* Uses Hidden Markov Models trained on data from 5s rRNA database <br>
* Fast with little loss of sensitivity, enabling the analysis of a complete genome in less than a minute <br>
* Location of '''rRNAs''' can be predicted with a very high accuracy <br>

<a href="http://eddylab.org/infernal/">Infernal</a> <br>
* Implementation of covariance models (CMs) <br>
* RNA homology search based on accelerated profile HMM methods and HMM-banded CM alignment methods <br>
* 100-fold faster RNA homology searches and ∼10,000-fold acceleration over exhaustive non-filtered CM searches <br>

**Github Link**:<a href="https://github.com/PaarthParekh/GenePrediction">GenePrediction</a>
