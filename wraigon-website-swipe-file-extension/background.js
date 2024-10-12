chrome.runtime.onMessage.addListener((message) => {
    if (message.url) {
      sendLinkToDiscord(message.url);
    }
  });
  
  function sendLinkToDiscord(url) {

    // PLEASE PROVIDE YOUR NAME BELOW
    const finderName = "Will"

    const webhookURL = "https://discord.com/api/webhooks/1294724465384624171/dAD00MkS52SgDXVQ6LHPtcvk2wimnmg4wIv-ep-eZSptFHXH-XXOVngLa1ddT7cDjHHM";  
  
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  
    const params = {
      username: "Website Swipe File Bot | Wraigon Tools",
      content: `Check out this cool website: ${url} | Found on ${formattedDate} by ${finderName}`,
    };
  
    // fetch API to send the request
    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Message sent to Discord successfully");
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }