// replace these values with those generated in your TokBox Account
var apiKey = "47139354";
var sessionId = "2_MX40NzEzOTM1NH5-MTYxNDE1OTM2Mjc5NX5qVld6ZWVuMFB5SkRYdXliTFZKbkdaTWt-fg";
var token = "T1==cGFydG5lcl9pZD00NzEzOTM1NCZzaWc9Y2NmMzRlMjk1OGMwY2E1Yzg1ZGE4OWZmOGVhMWEyZGY4NWFiN2Q2MjpzZXNzaW9uX2lkPTJfTVg0ME56RXpPVE0xTkg1LU1UWXhOREUxT1RNMk1qYzVOWDVxVmxkNlpXVnVNRkI1U2tSWWRYbGlURlpLYmtkYVRXdC1mZyZjcmVhdGVfdGltZT0xNjE0MTU5NDEwJm5vbmNlPTAuODA5Mzc4ODUxMDgwMTc5MiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjE0MjQ1ODA5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });
      
  
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }
  
