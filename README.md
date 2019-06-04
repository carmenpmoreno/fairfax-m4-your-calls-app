

## Project summary: “Your Calls 2.0”

Yours Calls is a web app that allows Interacso employees to register calls and send automatic notifications with the registered call data through Slack to the person requested.

In “Your Calls 2.0” we add new funcionalities on the SPA in order to use it to take business decissions.

### Project objectives: “Your Calls (original version)”

1. Create a system to register incoming calls data in a fast way (who calls, their contact details, person requested, message...)

2. Send the info automatically to the recipients (requested Interacso employees). This functionality works using a private OAuth Access Token that is provided by Slack. As it is private, it has been stored in a file called .env.local and then added to the .gitignore folder.

    See example below:


    REACT_APP_SKEY=xoxp-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx


3. Check the calls history.

### Project objectives: “Your Calls 2.0”

1. Record a new date for incoming calls: the mood of the client.
2. Add a new 
















