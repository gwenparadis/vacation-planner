const db = require("./connection");
const { User, Activity } = require("../models");

db.once("open", async () => {
  await Activity.deleteMany();

  const activities = await Activity.insertMany([
    {
      name: "Cabana Rental",
      description:
        "Rent one of our pool-side Cabanas for up to 6 hours! Great for couples or groups looking to reserve a shady spot by one of our three Salt Water pools.",
      activityDate: "12:30pm - March 25, 2023",
      price: 250,
      quantity: 20,
    },
    {
      name: "Vinyasa Flow",
      description:
        "Join us for a relaxing 30-minute morning yoga session by the pool. Yoga mats provided",
      activityDate: "12:30pm - March 25, 2023",
      price: 10,
      quantity: 15,
    },
    {
      name: "Jewelry Making",
      description:
        "Come look through our collection of unique sea shells, collected locally during our excursions, and learn to transform them into statement jewelry",
      activityDate: "12:30pm - March 25, 2023",
      price: 10,
      quantity: 30,
    },
    {
      name: "Mini Golf",
      description:
        "Reserve your spot and compete at our on-site 18-hole Mini Golf Course! One ticket required per-player",
      activityDate: "12:30pm - March 25, 2023",
      price: 10,
      quantity: 50,
    },
    {
      name: "Swimming with Dolphins",
      description:
        "Take a dive into our state-of-the-art Dolphin enclosure to experience the life-changing magic of these majestic ocean animals. Adventure requires a 20-minute safety biref that is included in the booking, and includes a 30-minute instructor-led swim with our trained animals.",
      activityDate: "12:30pm - March 25, 2023",
      price: 120,
      quantity: 20,
    },
    {
      name: "Swimming with Sharks",
      description:
        "Take a cruise with our marine experts to experience the life-changing magic of these majestic ocean animals. Adventure requires a 30-minute safety biref that is included in the booking, and includes a 120-minute instructor-led boat cruise that provides 90 minutes of snorkeling in a known hangout for local sharks.",
      activityDate: "12:30pm - March 25, 2023",
      price: 200,
      quantity: 30,
    },
    {
      name: "Tropical Snorkeling Adventure",
      description:
        "Take a cruise with our marine experts to experience the life-changing magic of these majestic ocean animals. Adventure requires a 30-minute safety biref that is included in the booking, and includes a 120-minute instructor-led boat cruise that provides 90 minutes of snorkeling in a known marine-life hotspot.",
      activityDate: "12:30pm - March 25, 2023",
      price: 150,
      quantity: 30,
    },
    {
      name: "Resort Full-Service Spa",
      description:
        "Come relax at our on-site Spa. Full-service includes your choice of massage, use of our Sauna, use of our luxury medicated hot tubs, and access to our newly renovated locker rooms. Refreshments are available for additional purchase",
      activityDate: "12:30pm - March 25, 2023",
      price: 150,
      quantity: 30,
    },
    {
      name: "60-minute Full Body Massage",
      description:
        "Come relax at our on-site Spa. Full-service includes your choice of 60-minute massage, and access to our newly renovated locker rooms. Refreshments are available for additional purchase",
      activityDate: "12:30pm - March 25, 2023",
      price: 80,
      quantity: 50,
    },
    {
      name: "90-minute Full Body Massage",
      description:
        "Come relax at our on-site Spa. Full-service includes your choice of 90-minute massage, and access to our newly renovated locker rooms. Refreshments are available for additional purchase",
      activityDate: "12:30pm - March 25, 2023",
      price: 120,
      quantity: 50,
    },
    {
      name: "60-minute Couples Massage",
      description:
        "Come relax at our on-site Spa. Full-service includes your choice of 60-minute Couples massage, and access to our newly renovated locker rooms. Refreshments are available for additional purchase",
      activityDate: "12:30pm - March 25, 2023",
      price: 160,
      quantity: 50,
    },
    {
      name: "90-minute Couples Massage",
      description:
        "Come relax at our on-site Spa. Full-service includes your choice of 90-minute Couples massage, and access to our newly renovated locker rooms. Refreshments are available for additional purchase",
      activityDate: "12:30pm - March 25, 2023",
      price: 250,
      quantity: 50,
    },
    {
      name: "Dinner Reservation -- Italian",
      description:
        "Place a deposit to reserve a table for 2-20 guests at the Italian restaurant. Deposit is applied to your bill total at the end of the meal, and is not an additional fee.",
      activityDate: "12:30pm - March 25, 2023",
      price: 50,
      quantity: 5,
    },
    {
      name: "Dinner Reservation -- Mexican",
      description:
        "Place a deposit to reserve a table for 2-20 guests at the Mexican restaurant. Deposit is applied to your bill total at the end of the meal, and is not an additional fee.",
      activityDate: "12:30pm - March 25, 2023",
      price: 50,
      quantity: 10,
    },
    {
      name: "Dinner Reservation -- Waterfront Seafood",
      description:
        "Place a deposit to reserve a table for 2-20 guests at the waterfront Seafood restaurant. Deposit is applied to your bill total at the end of the meal, and is not an additional fee.",
      activityDate: "12:30pm - March 25, 2023",
      price: 75,
      quantity: 5,
    },
    {
      name: "Dinner Reservation -- Hibachi",
      description:
        "Place a deposit to reserve a table for 2-20 guests at the Hibachi restaurant. Deposit is applied to your bill total at the end of the meal, and is not an additional fee.",
      activityDate: "12:30pm - March 25, 2023",
      price: 50,
      quantity: 8,
    },
    {
      name: "Guided Beach Tour",
      description:
        "Get your steps in while your tour the lush coastlines around our resort! Learn about the local ecosystem and explore the intricacies of our local area.",
      activityDate: "12:30pm - March 25, 2023",
      price: 20,
      quantity: 25,
    },
    {
      name: "Guided Hike (Beginner)",
      description:
        "Get your steps in while your tour the lush coastlines around our resort! Learn about the local ecosystem and explore the intricacies of our local area.",
      activityDate: "12:30pm - March 25, 2023",
      price: 20,
      quantity: 25,
    },
    {
      name: "Guided Hike (Intermediate)",
      description:
        "Get your steps in while you enjoy the more rugged terrain in our area! Sites include: waterfalls, local vegetation, and even a few animal sightings! Learn about the local ecosystem and explore the intricacies of our local area. Hike length: 6 miles. Lunch provided.",
      activityDate: "12:30pm - March 25, 2023",
      price: 45,
      quantity: 25,
    },
    {
      name: "Beach Front Horseback Riding",
      description:
        "Spend a magical afternoon riding one of our incredible hourses. Tours available for 2-10 guests per group. Experience includes a 30-minute safety briefing and 80-minute ride down the local coastline. Youth under 8 years of age not permitted.",
      activityDate: "12:30pm - March 25, 2023",
      price: 150,
      quantity: 10,
    },
  ]);

  console.log("activities seeded");

  await User.deleteMany();

  const users = await User.insertMany({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    savedActivities: [
      {
        _id: "6415f36125f6948818411d76",
        activityDate: "1684170000000",
        description:
          "Rent one of our pool-side Cabanas for up to 6 hours! Great for couples or groups looking to reserve a shady spot by one of our three Salt Water pools.",
        name: "Cabana Rental",
        price: 250,
        quantity: 20,
      },
      {
        _id: "6415f36125f6948818411d77",
        activityDate: "1684170000000",
        description:
          "Join us for a relaxing 30-minute morning yoga session by the pool. Yoga mats provided",
        name: "Vinyasa Flow",
        price: 10,
        quantity: 15,
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
