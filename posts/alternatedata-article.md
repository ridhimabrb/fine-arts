My curiosity about anything and everything that interests me is at an all time high during exam season.

So yesterday while surfing the internet, I came across a video showing a satellite image of a Walmart parking lot.

At first glance it looked completely unremarkable. Hundreds of tiny dots representing cars, a large rectangular building in the middle, and roads branching outward like veins.

The image actually sent me down a rabbit hole when I started exploring why a hedge fund would pay good money for that image.

That might sound ridiculous.

Why would anyone managing billions of dollars care about a photograph of a parking lot? The answer is very interesting, they don't care about the photograph. They care about the information hidden inside it, something as plain as a parking lot image is extensively utilized by hedge funds and quantitative trading firms. I had never thought of it this way.

And this realization led me down a rabbit hole that connected satellite imagery, machine learning, computer vision, alternative data, and quantitative finance.


The deeper I dug, the more I realized that modern finance looks surprisingly similar to modern data science.


The Information Race
Imagine that Walmart is scheduled to release its quarterly earnings report in three weeks.

Millions of investors want to know one thing: Did Walmart have a good quarter or a bad one?

Traditionally, investors would wait for the earnings report. But quantitative hedge funds take a different approach. 

Instead of waiting for the answer, they try to estimate it beforehand. The logic is simple and must be obvious by now. If more customers visited Walmart stores this quarter than last quarter, revenue will probably increase. So the real question becomes: Can we estimate customer activity before earnings are released?

This is where satellites enter the story. They help spot trends before they  become public.


Counting Cars From Space
Suppose a satellite captures images of hundreds of Walmart stores every few days.

A human could manually count the cars, but they train computer vision models capable of automatically identifying vehicles from aerial imagery.

The pipeline is similar to an object detection project in machine learning:

Collect satellite imagery.

Detect cars using computer vision models.

Count vehicles in each image.

Aggregate counts across locations.

Compare against historical averages.

Build predictive models for revenue.

If parking lots consistently contain more vehicles than usual, that may indicate increased foot traffic. More foot traffic often means more purchases. More purchases may translate into higher earnings. This alternate data gives analysts an informational edge ahead of consensus. An upper edge over other competitors. 

The signal extracted from the image is valuable. It's a distinction that appears repeatedly throughout quantitative finance.


The Rise of Alternative Data
When I first started reading about investing, the concept of alternate data stood out to me. Alternative data refers to information that is not traditionally found in company reports. Many modern quantitative funds are obsessed with alternative data.

Examples include:

Satellite imagery

Credit card transaction data

Flight tracking data

Shipping records

Mobile phone location data

Web traffic statistics

Social media activity

The goal is always the same:

Find information that helps estimate future business performance before the broader market notices it. Hedge funds are not merely trading firms anymore, they are data companies competing against other data companies.


A Real Example: Oil Storage Monitoring
One of the most famous applications of satellite imagery involves oil storage facilities. I have read so many case studies on this and this example never fails to impress me.


So, many storage tanks have floating roofs. These 'floating roofs' rise and fall with the oil level to prevent explosive vapor buildup. When oil is drawn out and the roof lowers, the tank’s outer wall casts a crescent-shaped shadow onto the sunken roof. And the shadow cast by the roof can reveal how much oil is stored inside!! (by factoring in the sun’s angle and time of day)

Analyzing satellite images of these facilities, allows analysts to calculate global crude supply weeks before official government reports are released. Knowing inventory levels even slightly earlier than competitors can create a trading advantage worth millions.

A report showed that hedge funds are aggressively buying alternative data, and this market is projected to hit $135.72 billion by 2030. Crazy


Why Access Isn't the Advantage
Companies such as Maxar, Planet Labs, and Airbus sell commercial satellite imagery to paying customers. Many organizations can purchase similar datasets.

The competitive advantage comes afterward.

Anyone can buy data right, but not everyone can process terabytes of imagery, build computer vision pipelines, remove noise, validate signals, and integrate them into trading strategies. The edge comes from transforming raw observations into predictive insights. In other words, the moat is not data ownership. The moat is data interpretation.


Why Most Signals Fail
This is the part that fascinated me the most because it resembles machine learning research.

Suppose a hedge fund discovers that Walmart parking lots were unusually crowded before strong earnings announcements.

Have they discovered a predictive signal? Maybe. Or maybe they have simply overfit historical data. A pattern that worked in the past may disappear tomorrow. A snowy weekend can distort traffic, road construction can affect parking, online shopping can increase while parking lot traffic decreases. The challenge is distinguishing genuine signal from random noise. This problem is almost identical to the challenges faced in machine learning.

Both fields are essentially trying to answer the same question: Does this pattern generalize beyond the data used to discover it?


The Quant Perspective
Another thing I learned while researching this topic is that quantitative finance is not really about predicting markets. It is about information extraction.

A satellite image is not valuable. What is valuable is converting those observations into a measurable signal that provides insight into future events.

The process looks remarkably similar to building an ML system:

Raw Data to Feature Engineering to Signal Generation to Prediction to Evaluation

The terminology changes but the underlying ideas do not.


One phrase that appears repeatedly in quantitative finance is signal-to noise ratio. Financial markets are incredibly noisy. Every day, markets generate an overwhelming amount of information: earnings releases, economic reports, breaking news, and millions of trades. The challenge is not finding data, it is identifying which tiny fraction of that data actually contains predictive value.


Why This Is an Arms Race
The existence of a good signal creates a strange paradox. The moment everyone discovers it, it stops being valuable.

Suppose ten hedge funds realize that satellite images can predict retailer performance. Soon hundreds of analysts begin monitoring the same stores. Eventually the information becomes incorporated into stock prices almost immediately and the advantage disappears. This creates a constant arms race.


Information is everywhere. The real advantage comes from seeing value in places where everyone else sees only pixels.

-Ridhima Pant