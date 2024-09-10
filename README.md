# SwiftCar

Car rental website built using React.js and Tailwind.Queries are made using Apollo GraphQL API built upon Nest.js framework. Used MySQL for the database to store the cars.

## How to use

The backend isn't currently being hosted, since I couldn't find any good services to deploy it for free. I'm currently trying to setup a proxmox server on an old laptop that I can use as my server. If you want to check out a demo of the project, feel free to reach out to me at **skodande@uwaterloo.ca**

Here are the steps to run the application on your local machine:

1. Clone the repository on your local machine
2. Run ```docker compose up -d```
3. Run ```npm install --legacy-peer-deps``` in both the frontend and backend directories so as to resolve any dependency conflicts
4. Run ```npm start``` in the frontend directory, and the website wil open up on "http://localhost:3000/"
5. Run ```npm run start:dev``` to start up the backend. You can then access the graphQL playgrouond on "localhost:9000/graphql"

## Queries

I use the following queries since my graphql playground is bugged for some reason.

Adding new car:

```
mutation {
	addNewCar(newCarData: {
		name: "Audi S3",
		monthlyPrice: 3100,
		dailyPrice: 120,
		gearType: "Auto",
		gas: "Diesel",
		mileage: "15K",
		thumbnailUrl: "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg"
	}) {

	id
	name
	thumbnailUrl
	mileage
}
}
```
Alternate image: https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg
Query the current cars in the database:

```
query {
	cars{
		id
		name
		mileage
		gearType
		gas
		thumbnailUrl
		dailyPrice
		monthlyPrice
}
}
```

Deleting a car from the database:

```
mutation {
  deleteCar(carId: "c5cf9428-0476-4170-87e5-6cefac094966")
}
```

![image](https://github.com/user-attachments/assets/a6b9867b-d0e4-40ee-84c1-555fd6268301)

![image](https://github.com/user-attachments/assets/5405ae2b-7225-4222-92df-38e18bd78a4d)

![image](https://github.com/user-attachments/assets/b377e1c7-906c-4fbe-82b4-39beaa8957d8)


