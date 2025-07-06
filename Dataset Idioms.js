const idioms = {
  "break the ice": {
    "meaning": "To start a conversation or interaction in an awkward situation.",
    "example": "He told a joke to break the ice at the meeting."
  },
  "hit the sack": {
    "meaning": "To go to sleep.",
    "example": "I'm really tired. I'm going to hit the sack now."
  },
  "once in a blue moon": {
    "meaning": "Something that happens very rarely.",
    "example": "We go out for dinner once in a blue moon."
  },
  "under the weather": {
    "meaning": "Feeling unwell or sick.",
    "example": "She's feeling under the weather today."
  },
  "spill the beans": {
    "meaning": "To reveal a secret.",
    "example": "He accidentally spilled the beans about the surprise party."
  },
  "piece of cake": {
    "meaning": "Something that is very easy to do.",
    "example": "That math test was a piece of cake."
  },
  "it’s giving": {
    "meaning": "Used to describe the vibe or energy something is giving off.",
    "example": "That outfit? It’s giving boss energy."
  },
  "no cap": {
    "meaning": "Used to emphasize honesty or seriousness; not lying.",
    "example": "She’s the best singer in school, no cap."
  },
  "slay": {
    "meaning": "To do something extremely well or look great.",
    "example": "You totally slayed that presentation!"
  },
  "ate and left no crumbs": {
    "meaning": "To perform something perfectly or flawlessly.",
    "example": "She sang that song perfectly. She ate and left no crumbs!"
  },
  "be so real": {
    "meaning": "A way to tell someone to be honest or realistic.",
    "example": "You think you’ll finish that assignment in 10 minutes? Be so real."
  },
  "girl, be for real": {
    "meaning": "An expressive phrase to question someone's statement.",
    "example": "You think pineapple belongs on pizza? Girl, be for real."
  },
  "i fear": {
    "meaning": "Used dramatically to express regret or an unfortunate truth.",
    "example": "I forgot to save my assignment… I fear it’s gone forever."
  },
  "the audacity": {
    "meaning": "Used to express shock or annoyance at someone's boldness.",
    "example": "He asked to copy my homework after ghosting me. The audacity!"
  },
  "i’m screaming": {
    "meaning": "Used to express strong emotion like laughter or shock.",
    "example": "He wore socks with sandals to prom. I’m screaming 😭"
  },
  "main character energy": {
    "meaning": "When someone acts like they are the protagonist in a story.",
    "example": "She walked in late with coffee in hand. Main character energy!"
  },
  "ratio": {
    "meaning": "A reply that gets more likes than the original post.",
    "example": "This take is awful. Ratio."
  },
  "mid": {
    "meaning": "Mediocre or average; not impressive.",
    "example": "Everyone hypes up that movie but honestly, it was kinda mid."
  },
  "a blessing in disguise": {
    "meaning": "Something that seems bad at first but turns out to be good",
    "example": "Losing that job was a blessing in disguise — I ended up finding my dream career."
  },
  "a dime a dozen": {
    "meaning": "Very common and not special",
    "example": "Don't worry about those errors — they're a dime a dozen in early drafts."
  },
  "beat around the bush": {
    "meaning": "Avoid saying something directly",
    "example": "Stop beating around the bush and tell me what really happened."
  },
  "bite the bullet": {
    "meaning": "Face a difficult situation with courage",
    "example": "I didn’t want to go to the dentist, but I had to bite the bullet."
  },
  "break the ice": {
    "meaning": "Start a conversation in a social setting",
    "example": "To break the ice, she made a joke about the weather."
  },
  "by the skin of your teeth": {
    "meaning": "Barely manage to do something",
    "example": "He passed the final exam by the skin of his teeth."
  },
  "cut to the chase": {
    "meaning": "Get to the point without wasting time",
    "example": "I'll cut to the chase — you're hired."
  },
  "down to earth": {
    "meaning": "Practical and realistic",
    "example": "Despite being famous, she's incredibly down to earth."
  },
  "easier said than done": {
    "meaning": "Not as easy to do as it sounds",
    "example": "Quitting your job sounds great, but it's easier said than done."
  },
  "get your act together": {
    "meaning": "Organize yourself and behave properly",
    "example": "You need to get your act together if you want to keep your job."
  },
  "give someone the cold shoulder": {
    "meaning": "Intentionally ignore someone",
    "example": "After the argument, she gave me the cold shoulder all week."
  },
  "hit the nail on the head": {
    "meaning": "Say or do something exactly right",
    "example": "When you said the team lacks communication, you hit the nail on the head."
  },
  "in the blink of an eye": {
    "meaning": "Very quickly",
    "example": "The car disappeared in the blink of an eye."
  },
  "jump on the bandwagon": {
    "meaning": "Join a trend or popular activity",
    "example": "Now everyone's jumping on the bandwagon and using that app."
  },
  "keep your chin up": {
    "meaning": "Stay positive during hard times",
    "example": "I know you're struggling, but keep your chin up. Things will get better."
  },
  "let the cat out of the bag": {
    "meaning": "Reveal a secret",
    "example": "He accidentally let the cat out of the bag about the surprise party."
  },
  "make a long story short": {
    "meaning": "Summarize something",
    "example": "To make a long story short, we missed the flight."
  },
  "on the ball": {
    "meaning": "Alert and quick to respond",
    "example": "She’s really on the ball when it comes to fixing tech issues."
  },
  "pull yourself together": {
    "meaning": "Calm down and control emotions",
    "example": "Take a deep breath and pull yourself together before the meeting."
  },
  "speak of the devil": {
    "meaning": "When someone appears right after being mentioned",
    "example": "Speak of the devil — we were just talking about you!"
  },
  "back to the drawing board": {
    "meaning": "Start again after a failure",
    "example": "The prototype failed, so it's back to the drawing board."
  },
  "ballpark figure": {
    "meaning": "An approximate number",
    "example": "Can you give me a ballpark figure for the renovation cost?"
  },
  "behind the scenes": {
    "meaning": "In secret or out of public view",
    "example": "A lot of hard work happens behind the scenes in a theater production."
  },
  "big picture": {
    "meaning": "The overall perspective or situation",
    "example": "Don't focus on small setbacks — think about the big picture."
  },
  "by the book": {
    "meaning": "Follow rules exactly",
    "example": "Our accountant does everything strictly by the book."
  },
  "corner the market": {
    "meaning": "Dominate a particular market",
    "example": "They’ve cornered the market on organic skincare products."
  },
  "cut corners": {
    "meaning": "Do something poorly to save time or money",
    "example": "The builder cut corners, and now the roof is leaking."
  },
  "get the ball rolling": {
    "meaning": "Start something",
    "example": "Let’s get the ball rolling on the new campaign."
  },
  "in the driver’s seat": {
    "meaning": "In control",
    "example": "With the new promotion, she's finally in the driver’s seat."
  },
  "learn the ropes": {
    "meaning": "Learn how to do a job or task",
    "example": "It took me a week to learn the ropes at my new job."
  },
  "miss the boat": {
    "meaning": "Miss an opportunity",
    "example": "He missed the boat by not applying for the scholarship in time."
  },
  "on the same page": {
    "meaning": "In agreement",
    "example": "Before we continue, let's make sure we're on the same page."
  },
  "raise the bar": {
    "meaning": "Set higher standards",
    "example": "Her performance really raised the bar for the whole team."
  },
  "think outside the box": {
    "meaning": "Think creatively",
    "example": "We need to think outside the box to solve this problem."
  },
  "touch base": {
    "meaning": "Make contact or check in",
    "example": "Let’s touch base next week to finalize the plans."
  },
  "up in the air": {
    "meaning": "Uncertain or undecided",
    "example": "Our vacation plans are still up in the air."
  },
  "win-win situation": {
    "meaning": "A situation where all parties benefit",
    "example": "Splitting the profits equally was a win-win situation."
  },
  "take the bull by the horns": {
    "meaning": "Deal with a problem directly",
    "example": "She decided to take the bull by the horns and confront her manager."
  },
  "call the shots": {
    "meaning": "Be in charge or make decisions",
    "example": "In this project, Jake is the one calling the shots."
  },
  "a tough nut to crack": {
    "meaning": "A difficult problem or person",
    "example": "That math problem was a tough nut to crack."
  },
  "head over heels": {
    "meaning": "Deeply in love",
    "example": "He’s head over heels for his new girlfriend."
  },
  "tie the knot": {
    "meaning": "Get married",
    "example": "They’re planning to tie the knot this fall."
  },
  "pop the question": {
    "meaning": "Propose marriage",
    "example": "He popped the question during their trip to Paris."
  },
  "lovebirds": {
    "meaning": "Two people in love",
    "example": "The lovebirds couldn’t stop smiling at each other."
  },
  "on the rocks": {
    "meaning": "In trouble (relationship)",
    "example": "Their relationship has been on the rocks lately."
  },
  "fall for someone": {
    "meaning": "Start loving someone",
    "example": "She fell for him the moment they met."
  },
  "have a crush on": {
    "meaning": "Have romantic feelings for someone",
    "example": "I had a crush on my classmate in high school."
  },
  "match made in heaven": {
    "meaning": "Perfect couple",
    "example": "They’re truly a match made in heaven."
  },
  "those three little words": {
    "meaning": "\"I love you\"",
    "example": "It took him months to say those three little words."
  },
  "wear your heart on your sleeve": {
    "meaning": "Show emotions openly",
    "example": "She always wears her heart on her sleeve, so you’ll know how she feels."
  },
  "a quick study": {
    "meaning": "Someone who learns something fast",
    "example": "He’s a quick study and picked up the software in just one day."
  },
  "hit the books": {
    "meaning": "Study hard",
    "example": "Finals are coming up, so it's time to hit the books."
  },
  "learn the hard way": {
    "meaning": "Discover something through personal experience or mistakes",
    "example": "He learned the hard way not to ignore deadlines."
  },
  "learn by heart": {
    "meaning": "Memorize",
    "example": "We had to learn the poem by heart for class."
  },
  "put on your thinking cap": {
    "meaning": "Think carefully",
    "example": "You’ll need to put on your thinking cap to solve this puzzle."
  },
  "as easy as abc": {
    "meaning": "Very simple",
    "example": "The instructions were as easy as ABC."
  },
  "read between the lines": {
    "meaning": "Understand the hidden meaning",
    "example": "She didn’t say it directly, but I could read between the lines."
  },
  "teacher’s pet": {
    "meaning": "A student favored by the teacher",
    "example": "Everyone knew Sarah was the teacher’s pet."
  },
  "know the ropes": {
    "meaning": "Be familiar with how something works",
    "example": "Once you know the ropes, this job gets easier."
  },
  "pass with flying colors": {
    "meaning": "Succeed with excellence",
    "example": "She passed the exam with flying colors."
  },
  "drop the ball": {
    "meaning": "Make a mistake",
    "example": "I really dropped the ball by forgetting the meeting."
  },
  "goof up": {
    "meaning": "Make a silly or careless mistake",
    "example": "He goofed up the presentation by skipping a whole section."
  },
  "in hot water": {
    "meaning": "In trouble",
    "example": "He’s in hot water with his boss after missing the deadline."
  },
  "make a mountain out of a molehill": {
    "meaning": "Exaggerate a small problem",
    "example": "Don’t make a mountain out of a molehill — it’s just a minor issue."
  },
  "bite off more than you can chew": {
    "meaning": "Take on too much",
    "example": "She bit off more than she could chew by joining three clubs."
  },
  "cry over spilled milk": {
    "meaning": "Complain about something that can't be changed",
    "example": "It’s no use crying over spilled milk — just learn from it and move on."
  },
  "add fuel to the fire": {
    "meaning": "Make a bad situation worse",
    "example": "Yelling back at him only added fuel to the fire."
  },
  "back to square one": {
    "meaning": "Start over",
    "example": "The client rejected our idea, so we’re back to square one."
  },
  "blow it": {
    "meaning": "Fail or ruin something",
    "example": "I had a chance to impress the manager, but I blew it."
  },
  "hit a snag": {
    "meaning": "Encounter a problem",
    "example": "We hit a snag when the shipment got delayed."
  },
  "let it slip through your fingers": {
    "meaning": "Miss an opportunity",
    "example": "She let the promotion slip through her fingers by missing the deadline."
  },
  "shoot yourself in the foot": {
    "meaning": "Cause your own problem",
    "example": "He shot himself in the foot by insulting the interviewer."
  },
  "skating on thin ice": {
    "meaning": "Doing something risky",
    "example": "You're skating on thin ice by ignoring your supervisor's warnings."
  },
  "a storm in a teacup": {
    "meaning": "A lot of fuss over something unimportant",
    "example": "The whole argument was just a storm in a teacup."
  },
  "put your foot in your mouth": {
    "meaning": "Say something embarrassing or inappropriate",
    "example": "I really put my foot in my mouth when I mentioned her ex."
  },
  "spill the beans": {
    "meaning": "Reveal a secret",
    "example": "He accidentally spilled the beans about the surprise party."
  },
  "on thin ice": {
    "meaning": "In a risky situation",
    "example": "You’re on thin ice with your boss after showing up late again."
  },
  "out of the frying pan into the fire": {
    "meaning": "From a bad situation to a worse one",
    "example": "He left one stressful job for another — out of the frying pan into the fire."
  },
  "throw a wrench in the works": {
    "meaning": "Cause a problem in a plan",
    "example": "The software bug threw a wrench in the works right before the launch."
  },
  "at the end of your rope": {
    "meaning": "Out of patience or energy",
    "example": "After dealing with the issue all week, I’m at the end of my rope."
  },
  "all ears": {
    "meaning": "Fully listening",
    "example": "Tell me what happened — I’m all ears."
  },
  "blow off steam": {
    "meaning": "Release pent-up emotions",
    "example": "He went for a run to blow off some steam after the meeting."
  },
  "cold feet": {
    "meaning": "Nervousness before something important",
    "example": "She got cold feet just before the wedding."
  },
  "down in the dumps": {
    "meaning": "Feeling sad",
    "example": "He’s been down in the dumps since his dog passed away."
  },
  "on cloud nine": {
    "meaning": "Extremely happy",
    "example": "She was on cloud nine after hearing the good news."
  },
  "in high spirits": {
    "meaning": "Feeling cheerful",
    "example": "The whole team was in high spirits after winning the game."
  },
  "lose your temper": {
    "meaning": "Become very angry",
    "example": "Try not to lose your temper during the negotiation."
  },
  "pull a face": {
    "meaning": "Make a facial expression of dislike",
    "example": "She pulled a face when she tasted the bitter soup."
  },
  "cry wolf": {
    "meaning": "Ask for help when it’s not needed",
    "example": "If you keep crying wolf, no one will believe you when it’s real."
  },
  "go the extra mile": {
    "meaning": "Do more than expected",
    "example": "He always goes the extra mile to help his coworkers."
  },
  "have a heart of gold": {
    "meaning": "Be very kind and generous",
    "example": "She has a heart of gold and is always helping others."
  },
  "hit the roof": {
    "meaning": "Become extremely angry",
    "example": "Dad hit the roof when he saw the broken window."
  },
  "keep your cool": {
    "meaning": "Stay calm",
    "example": "Even under pressure, she managed to keep her cool."
  },
  "laugh your head off": {
    "meaning": "Laugh very hard",
    "example": "That movie was hilarious — I laughed my head off!"
  },
  "throw a tantrum": {
    "meaning": "Act out of anger (often like a child)",
    "example": "The toddler threw a tantrum in the store when he didn’t get candy."
  },
  "wear many hats": {
    "meaning": "Have many roles or responsibilities",
    "example": "In a small business, you often have to wear many hats."
  },
  "be full of hot air": {
    "meaning": "Talk nonsense or exaggerate",
    "example": "He’s always full of hot air during meetings."
  },
  "have a chip on your shoulder": {
    "meaning": "Be easily offended",
    "example": "He’s had a chip on his shoulder since he was passed over for promotion."
  },
  "keep a stiff upper lip": {
    "meaning": "Stay strong during tough times",
    "example": "Even during the crisis, she kept a stiff upper lip."
  },
  "be in a pickle": {
    "meaning": "Be in a difficult or confusing situation",
    "example": "I’m in a pickle — I promised to be in two places at once."
  },
  "around the clock": {
    "meaning": "All day and night",
    "example": "The doctors worked around the clock to save the patient."
  },
  "beat the clock": {
    "meaning": "Finish before a deadline",
    "example": "We managed to beat the clock and submit the report just in time."
  },
  "behind the times": {
    "meaning": "Old-fashioned",
    "example": "That company is behind the times when it comes to technology."
  },
  "better late than never": {
    "meaning": "It’s better to do something late than not at all",
    "example": "He finally apologized — better late than never."
  },
  "call it a day": {
    "meaning": "Stop working for the day",
    "example": "We've done enough for now. Let’s call it a day."
  },
  "crunch time": {
    "meaning": "A short period when there's a lot of pressure to succeed",
    "example": "It’s crunch time — the project deadline is tomorrow!"
  },
  "in the nick of time": {
    "meaning": "Just in time",
    "example": "The firefighters arrived in the nick of time."
  },
  "once in a blue moon": {
    "meaning": "Very rarely",
    "example": "I only go hiking once in a blue moon."
  },
  "on the dot": {
    "meaning": "Exactly on time",
    "example": "The meeting starts at 9 a.m. on the dot."
  },
  "time flies": {
    "meaning": "Time goes by quickly",
    "example": "Time flies when you're having fun."
  },
  "kill time": {
    "meaning": "Do something to pass time",
    "example": "I played games on my phone to kill time before the appointment."
  },
  "make up for lost time": {
    "meaning": "Work faster to catch up",
    "example": "We worked overtime to make up for lost time."
  },
  "take your time": {
    "meaning": "Do something slowly and carefully",
    "example": "Take your time — there's no rush."
  },
  "eleventh hour": {
    "meaning": "At the last possible moment",
    "example": "He turned in his essay at the eleventh hour."
  },
  "from time to time": {
    "meaning": "Occasionally",
    "example": "I visit my grandparents from time to time."
  },
  "just around the corner": {
    "meaning": "Coming very soon",
    "example": "Final exams are just around the corner."
  },
  "out of time": {
    "meaning": "No time left",
    "example": "We’re out of time — submit what you have."
  },
  "bide your time": {
    "meaning": "Wait patiently",
    "example": "He’s biding his time before asking for a promotion."
  },
  "third time’s the charm": {
    "meaning": "The third try will succeed",
    "example": "After failing twice, she finally passed. Third time’s the charm!"
  },
  "at the crack of dawn": {
    "meaning": "Very early in the morning",
    "example": "We left at the crack of dawn to avoid traffic."
  },
  "bend over backwards": {
    "meaning": "Try very hard to help",
    "example": "She bent over backwards to make sure everything was perfect."
  },
  "burn the midnight oil": {
    "meaning": "Work late into the night",
    "example": "He burned the midnight oil to finish his thesis."
  },
  "go for broke": {
    "meaning": "Risk everything to win big",
    "example": "They decided to go for broke and launch the product early."
  },
  "hang in there": {
    "meaning": "Don’t give up",
    "example": "I know it's tough, but hang in there!"
  },
  "hit the ground running": {
    "meaning": "Start something energetically",
    "example": "She hit the ground running on her first day at work."
  },
  "jump the gun": {
    "meaning": "Act too soon",
    "example": "He jumped the gun and sent the email before confirming the details."
  },
  "keep your nose to the grindstone": {
    "meaning": "Work hard",
    "example": "She kept her nose to the grindstone and finished the book early."
  },
  "move heaven and earth": {
    "meaning": "Try everything possible",
    "example": "They moved heaven and earth to save the business."
  },
  "pull out all the stops": {
    "meaning": "Use all resources",
    "example": "The team pulled out all the stops for the product launch."
  },
  "push the envelope": {
    "meaning": "Go beyond normal limits",
    "example": "This design really pushes the envelope."
  },
  "start from scratch": {
    "meaning": "Start from the beginning",
    "example": "We had to start from scratch after the system crashed."
  },
  "take a shot at it": {
    "meaning": "Try something",
    "example": "I’ve never painted before, but I’ll take a shot at it."
  },
  "the ball is in your court": {
    "meaning": "It’s your decision now",
    "example": "I’ve made my offer — the ball is in your court."
  },
  "walk the extra mile": {
    "meaning": "Do more than what is required",
    "example": "She always walks the extra mile for her students."
  },
  "throw in the towel": {
    "meaning": "Give up",
    "example": "After several failed attempts, he threw in the towel."
  },
  "stick to your guns": {
    "meaning": "Stand by your beliefs",
    "example": "Even under pressure, she stuck to her guns."
  },
  "break a sweat": {
    "meaning": "Make an effort",
    "example": "He didn’t even break a sweat during the presentation."
  },
  "burn your bridges": {
    "meaning": "Destroy relationships or opportunities permanently",
    "example": "Don't burn your bridges with former employers."
  },
  "get a move on": {
    "meaning": "Hurry up",
    "example": "We need to get a move on if we want to catch the train."
  },
  "pull your weight": {
    "meaning": "Do your fair share of the work",
    "example": "Everyone has to pull their weight in this group project."
  },
  "elephant in the room": {
    "meaning": "An obvious problem no one talks about",
    "example": "We need to address the elephant in the room — our declining sales."
  },
  "kick the bucket": {
    "meaning": "Die",
    "example": "He finally kicked the bucket at the age of 98."
  },
  "not playing with a full deck": {
    "meaning": "Not mentally sound",
    "example": "He seems nice, but I’m not sure he’s playing with a full deck."
  },
  "hit the sack": {
    "meaning": "Go to bed",
    "example": "I’m exhausted — time to hit the sack."
  },
  "raining cats and dogs": {
    "meaning": "Raining heavily",
    "example": "Don’t forget your umbrella — it’s raining cats and dogs out there!"
  },
  "under the weather": {
    "meaning": "Feeling sick",
    "example": "She’s not coming to work today — she’s feeling under the weather."
  },
  "cost an arm and a leg": {
    "meaning": "Very expensive",
    "example": "That designer bag cost an arm and a leg."
  },
  "the best of both worlds": {
    "meaning": "An ideal situation",
    "example": "Working from home gives me the best of both worlds — comfort and productivity."
  },
  "let sleeping dogs lie": {
    "meaning": "Avoid restarting old conflicts",
    "example": "Just let sleeping dogs lie — bringing it up again won't help."
  },
  "throw (someone) under the bus": {
    "meaning": "Betray or blame someone to save yourself",
    "example": "He threw his teammate under the bus to avoid getting in trouble."
  }
}


