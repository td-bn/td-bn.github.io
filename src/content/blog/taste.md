---
title: "Taste"
description: "Learning to decide what engineering work is important."
pubDate: 2026-09-20
---

> The phrase “good taste” describes the ability to distinguish what is important from what isn’t important. Having good taste is an important part of being a good software designer.

John K. Ousterhout, A Philosophy of Software Design

If "taste" is distinguishing what is important from what isn't, I started out with no idea that such a skill existed.

As a junior, I relied on my boss or product team to do that sort of thinking for me. I assumed the work we were given was the right work to build. This was fine while I was starting out. But as I grew and had more freedom to choose what I worked on, I started seeing the cost of not working on the important things. I think this can be more pronounced in internal-facing teams, such as data, infrastructure, or analyst teams.

As I grew, I found myself following the standard industry playbook for things to improve. You might move from cron to Airflow, or deploy containers instead of checking out a version of your main branch. These are established industry patterns. They are probably the right thing to do in many cases. I made decisions this way without applying them to my specific use case or questioning them enough.

For example, I introduced a cache in one of our apps. It was hard to maintain and did not deliver the payoff we expected. The more important work might have been to think about how we stored data upstream, or research how to make our processing faster. The cost was six months of wasted time and resources.

Putting your ideas out there so others can critique them is important. We like feeling smart and hate sounding dumb. It is useful to train yourself to separate your ideas from your identity. Get feedback on your ideas, and you can save yourself a world of pain and humiliation.

In the cache case, we ended up researching more and making the processing faster, but we might end up rethinking our storage layer in the future as that didn't solve the problem entirely. Having learned from my mistakes, mostly the hard way, I now constantly ask myself these questions.

*Is this the most important thing I could be working on right now? Who can help me answer that question?*

Sometimes it might be stakeholders in a different team, and you need to talk to them. You cannot rely on your boss to do it. They might already have too much on their plate.

For example, I talked to one of our internal teams about what they would like us to improve about the data we were serving them. I expected an answer like more granular data or more frequent updates. To my surprise, they said the data was fine. We could improve along the lines I had been thinking about, but the most impactful work might be to source data from an entirely new source. I then tried to make that a reality by collaborating with upstream teams to see how feasible it was.

For the work we do regularly, I think most engineers have a good sense of how to tackle it. But I have found that conversations with people are often where the 80/20 is revealed.

When John K. Ousterhout said that "good taste" is deciding what is important, he was mostly talking about focusing on software design. But I have found it a good frame for thinking about my responsibilities as an engineer.
