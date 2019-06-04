
### Project summary: “Your Calls 1.0”

Yours Calls is a web app that allows to register phone calls with notifications and statistics. This is a inheritate project. In the original project these features were already developed:

1 - It allows Interacso employees to register phone calls.

2 - It saves information about the call:
    - Who answered the phone
    - Which employee did they want to talk with
    - Who called (contact details)
    - Message that they leave

3 - It sends automatic notifications with the registered call data through Slack.
    - This functionality works using a private OAuth Access Token that is provided by Slack. 
    - As it is private, it has been stored in a file called .env.local and then added to the .gitignore folder. 
    - Example: REACT_APP_SKEY=xoxp-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

4 -  It allows you to check the full calls history.

## Project summary: “Your Calls 2.0”

In “Your Calls 2.0” we add new funcionalities on the Single Page Application, in order to use it to make business decissions:

5 - It adds a field in the form to record the mood of the client during the call (good, neutral or bad)

6 - It creates statistics with these

5 - It sends the info automatically to the recipients (requested Interacso employees). This functionality works using a private OAuth Access Token that is provided by Slack. As it is private, it has been stored in a file called .env.local and then added to the .gitignore folder.

    See example below:


    REACT_APP_SKEY=xoxp-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx


3. Check the calls history.

### Project objectives: “Your Calls 2.0”

1. 

2. Add a new Statistics screen named "Estadísticas" where we can filter the data by date.

3. The results are shown with two graphics: the mood of the clients and the number of calls on that period of time.
















