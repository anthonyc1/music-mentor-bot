exports = module.exports;
const request = require('request');

exports.sendMainMenu = function(sender, token) {
    // let messageData = {
    //     "attachment":{
    //   "type":"template",
    //   "payload":{
    //     "template_type":"button",
    //     "text":"What do you want to do next?",
    //     "buttons":[
    //       {
    //         "type":"postback",
    //         "title":"View Scales",
    //         "payload":"mainmenuscales"
    //       },
    //       {
    //         "type":"postback",
    //         "title":"Start Chatting",
    //         "payload":"startchatting"
    //       },
    //       {
    //         "type":"postback",
    //         "title":"View Web App",
    //         "payload":"webapp"
    //       },
    //     ]
    //   }
    // }
    // }
    let messageData = {
    "text":"Hii!! This is Music Mentor Bot's main menu.\nWhat do you want to do next?\nNote: just type \"menu\" if you want to come back.",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"View Scales",
        "payload":"view scales"
      },
      {
        "content_type":"text",
        "title":"Start Chatting",
        "payload":"start chatting"
      },
      {
        "content_type":"text",
        "title":"View Web App",
        "payload":"view web app"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        sender_action:"typing_on",
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}
exports.mainMenuScales = function(sender, token) {
    // let messageData = {
    //     "attachment":{
    //   "type":"template",
    //   "payload":{
    //     "template_type":"button",
    //     "text":"NAVIGATE through out menu system"
    //     + "\n\nOr TYPE the scale name instead! Ex: type \"C# major\" or \"Ab pentatonic minor\".",
    //     "buttons":[
    //       {
    //         "type":"postback",
    //         "title":"Major/Minor Scales",
    //         "payload":"scales"
            
    //       },
    //       {
    //         "type":"postback",
    //         "title":"Pentatonic Scales",
    //         "payload":"pentatonicscales"
    //       }
    //     ]
    //   }
    // }
    // }
    let messageData = {
    "text":"Navigate here or simply type the name of the scale you want to see.\nEx: \"C# major\"",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Major/Minor Scales",
        "payload":"scales"
      },
      {
        "content_type":"text",
        "title":"Pentatonic Scales",
        "payload":"pentatonicscales"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.chooseScale = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a scale:",
        "buttons":[
          {
            "type":"postback",
            "title":"Major",
            "payload":"major"
            
          },
          {
            "type":"postback",
            "title":"Natural Minor",
            "payload":"minor"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.choosePentatonicScale = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a scale:",
        "buttons":[
          {
            "type":"postback",
            "title":"Pentatonic Major",
            "payload":"pentamajor"
            
          },
          {
            "type":"postback",
            "title":"Pentatonic Minor",
            "payload":"pentaminor"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.chooseMajorScale = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a range:",
        "buttons":[
          {
            "type":"postback",
            "title":"C to Eb",
            "payload":"range1"
            
          },
          {
            "type":"postback",
            "title":"E to G",
            "payload":"range2"
          },
          {
            "type":"postback",
            "title":"Ab to B",
            "payload":"range3"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.chooseMinorScale = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a range:",
        "buttons":[
          {
            "type":"postback",
            "title":"C to Eb",
            "payload":"rangeminor1"
            
          },
          {
            "type":"postback",
            "title":"E to G",
            "payload":"rangeminor2"
          },
          {
            "type":"postback",
            "title":"Ab to B",
            "payload":"rangeminor3"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.choosePentatonicMajorScale = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a range:",
        "buttons":[
          {
            "type":"postback",
            "title":"C to Eb",
            "payload":"rangepentatonic1"
            
          },
          {
            "type":"postback",
            "title":"E to G",
            "payload":"rangepentatonic2"
          },
          {
            "type":"postback",
            "title":"Ab to B",
            "payload":"rangepentatonic3"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.choosePentatonicMinorScale = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a range:",
        "buttons":[
          {
            "type":"postback",
            "title":"C to Eb",
            "payload":"rangepentatonic4"
            
          },
          {
            "type":"postback",
            "title":"E to G",
            "payload":"rangepentatonic5"
          },
          {
            "type":"postback",
            "title":"Ab to B",
            "payload":"rangepentatonic6"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.webapp = function(sender, token) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Welcome to Music Mentor",
                    "subtitle": "Visit our companion web app:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/MusicMentorIcon.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://musicmentorapp.herokuapp.com/",
                        "title": "View Web App"
                    }],
                }]
            }
        }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.help = function(sender, token) {
    let messageData = {
    "text":"Here's what you can do:"
    + " \n\nClick \"view scales\" OR type a scale name, such as \"E major\", to view it."
    + " \n\nClick the \"start chatting\" to see chat options."
    + " \n\nClick \"view web app\" to see our companion web application."
    + " \n\nWas that helpful? I'd love your feedback! :)",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"yes",
        "payload":"yes"
      },
      {
        "content_type":"text",
        "title":"no",
        "payload":"no"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.start = function(sender, token) {
    let messageData = {
    "text":"Hi there music lover! Let's get started, shall we? Pick one:",
    // "quick_replies":[
    //   {
    //     "content_type":"text",
    //     "title":"view scales",
    //     "payload":"view scales"
    //   },
    //   {
    //     "content_type":"text",
    //     "title":"start chatting",
    //     "payload":"start chatting"
    //   },
    //   {
    //     "content_type":"text",
    //     "title":"view web app",
    //     "payload":"view web app"
    //   }
    // ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.startChatting = function(sender, token) {
    let messageData = {
    "text":"Start by saying something! Here are a few for starters.",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"music",
        "payload":"music"
      },
      {
        "content_type":"text",
        "title":"joke",
        "payload":"joke"
      },
      {
        "content_type":"text",
        "title":"story",
        "payload":"story"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.returnToChatting = function(sender, token) {
    let messageData = {
    "text":"Welcome back! What would you like to talk about next?",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"music",
        "payload":"music"
      },
      {
        "content_type":"text",
        "title":"joke",
        "payload":"joke"
      },
      {
        "content_type":"text",
        "title":"story",
        "payload":"story"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.answerMusic = function(sender, token) {
    let messageData = {
    "text":"Let me tell you a secret, hooman. I was the teacher's \"bot\" in school. Shhh."
    + " ...Oh, it's teacher's \"pet\"? Is that what the hoomans call it?"
    + "\n\nANYWAYS, what's music you ask? Music is the presence and absence of sound over a span of time. Deep, isn't it?"
    + "\n\nLet's learn more!",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"scale",
        "payload":"scale"
      },
      {
        "content_type":"text",
        "title":"scale conversion",
        "payload":"scale conversion"
      },
      {
        "content_type":"text",
        "title":"chord",
        "payload":"chord"
      },
      {
        "content_type":"text",
        "title":"interval",
        "payload":"interval"
      },
      {
        "content_type":"text",
        "title":"back",
        "payload":"back"
      }

    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.storyMenu = function(sender, token) {
    let messageData = {
    "text":"Yes, I love storytime. What kind of story would you like to hear?",
    "quick_replies":[
       {
        "content_type":"text",
        "title":"funny",
        "payload":"funny"
      },
      {
        "content_type":"text",
        "title":"embarrassing",
        "payload":"embarrassing"
      },
      {
        "content_type":"text",
        "title":"sad",
        "payload":"sad"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}