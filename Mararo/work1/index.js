<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kahawa West Baptist Church</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f4e0; /* Change this to your desired color */
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            padding: 50px 0;
        }

        .service {
            border: 1px solid #ddd;
            padding: 20px;
            margin-bottom: 20px;
            background-color: #fff;
        }

        h1, h2, h3 {
            margin-top: 0;
        }

        button {
            padding: 10px 15px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 4px;
        }

        button:hover {
            background-color:#0056b3;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>Welcome to Kahawa West Baptist Church</h1>
        <p>We are located in Nairobi, Kenya at a place called Kahawa West. Join us for an uplifting experience.</p>
    </div>

    <div class="service">
        <h2>Our Services</h2>
        <p>First Service: 9:00am - 11:00am</p>
        <p>Youth Service: 9:00am - 11:00am</p>
        <p>Second Service: 11:30am - 1:00pm</p>
        <p>CBN (Christ By Nature) Children's Service: 11:30am - 1:00pm</p>
        <p><strong>Note:</strong> Every Sunday of the month, except August, we have an evening home-based fellowship from 2:00pm till 7:00pm. August is our youth month, full of activities!</p>
    </div>

    <button id="showMore">Show More About Us</button>
    <div id="moreInfo" style="display: none;">
        <h3>About Our Church</h3>
        <p>Here, you can add more information about the history of your church, its mission, vision, and other relevant details. This section can be expanded as needed.</p>
    </div>
</div>

<script>
    document.getElementById("showMore").addEventListener("click", function() {
        var moreInfo = document.getElementById("moreInfo");
        if (moreInfo.style.display === "none") {
            moreInfo.style.display = "block";
        } else {
            moreInfo.style.display = "none";
        }
    });
</script>

</body>
</html>
