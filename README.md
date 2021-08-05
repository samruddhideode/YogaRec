# Yogasana_Recommender
***Web App which recommends a Yoga Asana based on your goals.*** <br>
![home](https://github.com/samruddhideode/Yogasana_Recommender/blob/master/images/pic1.PNG)
***You have to rate your goals on a scale of 1 to 10 when you sign up on the app.*** <br>
![signup](https://github.com/samruddhideode/Yogasana_Recommender/blob/master/images/poc2.PNG)

---
We calculate a ```match score``` of the User with each Asana. The User is then given an assortment of the top 3 asanas that would help him/her reach her goals. <br>
<h3>How do we calculate this match score?</h3><br>
The User matrix will be a 1D array of the values for each goal presented to him/her. <br> Eg. I have severe asthama, I am not obese but still want to shed a couple kilos and
I am diagnosed with PCOS. I will rate my goals in the following way: 
<ul> <li> Imporove Lung Function: 10 </li>
 <li> Control PCOS: 6 </li>
  <li> Lose weight: 3 </li>
  </ul>
  While I'll rate the rest of the goals like Controlling hypertension, diabetes, etc. with a 0.<br>
  User Array = [3,0,0,0,10,6]<br>
  Now, each Asana will have a boolean value for each goal depending on whether it is helpful to reach that goal or not. Eg. For Bhujangasana:
  <ul> <li> Weight Loss: 1 </li>
       <li> Control Hypertension: 0 </li>
       <li> Reduce Anxiety: 0 </li>
       <li> Control Diabetes: 1 </li>
       <li> Improve Lung Function: 1 </li>
       <li> Manage PCOS: 1 </li>
       </ul> 
  Asana Array = [1,0,0,1,1,1]
  A dot product of these two arrays will give us the match score, which here is 19. 
  The Asanas with the top 3 match scores would be recommended to the user.<br><br>
  
  ![recommend](https://github.com/samruddhideode/Yogasana_Recommender/blob/master/images/pic3.PNG)
  
  ![update](https://github.com/samruddhideode/Yogasana_Recommender/blob/master/images/pic4.PNG)
---
***Tech Stack***
<li>Node js </li>
<li>Express </li>
<li>Mongodb </li>
<li>EJS, CSS, JS </li>
