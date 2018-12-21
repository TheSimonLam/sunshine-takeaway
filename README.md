###Sunshine Takeaway Website - React Application
##Uses node v10.1.0
##How re-deploy
1. Log into AWS Lightsail console for the Sunshine Takeaway node app
2. cd into stack -> apps -> myapp -> htdocs -> SunshineTakeawayV2
3. Do a `sudo git pull` to get the latest changes
4. Run `sudo npm run build`
5. Run `forever start -c "npm run prod" /`