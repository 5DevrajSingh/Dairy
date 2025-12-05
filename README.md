1) Village Register Api for Dairy Project
http://localhost:5000/api/village
{
  "village_name": "Sahaspur",
  "state": "UP",
  "city" : "Noida",
  "pincode": "244222",
  "sector": "Sector 45"
}

2) Street Register API 
http://localhost:5000/api/gali
{
  "village_id": "692fc49a1b3ef2d10dc13fcd",
  "gali_no": "Gali No-1",
  "house_no": "915, Diya Madicose",
  "landmark": "Sonalika"
}

3) User Register Api 
http://localhost:5000/api/user
{
    "village_id":"692fc49a1b3ef2d10dc13fcd",
    "gali_id":"692fc523a4e13db31f2bd925",
    "user_name":"Shivam Kumar",
    "phone":"9876543510",
    "milk":"cow",
    "rate":70,
    "token":""
}

4) Milk Distribution Api by street
http://localhost:5000/api/milk
{
    "village_id":"692e843b538544dbb9330a5a",
    "gali_id":"692e8537538544dbb9330a62",
    "user_id":"692e85c8538544dbb9330a6a",
    "date":"2025-12-02",
    "time_slot":"evening",
    "quantity_litre":1,
    "rate_per_litre":60,
    "total_amount":""
}

5) Get deatils by 1week and 15days and 1month Metod GET by user_id
http://localhost:5000/api/billing/1week?user_id=692e85c8538544dbb9330a6a

6) Add payment details Api 
http://localhost:5000/api/payment/add
{
  "user_id": "692e85c8538544dbb9330a6a",
  "start_date": "2025-11-01",
  "end_date": "2025-11-15",
  "payment_mode": "Case",
  "total_payment": 480,
  "total_milk": 8,
  "date": "2025-12-01"
}

7) This is master API. This api get all details for user by user_id method GET
http://localhost:5000/api/user/summary?user_id=692e85c8538544dbb9330a6a

8)Send Notification API using FCM notification 
http://localhost:5000/api/notify/send
{
  "village_id": "692fc49a1b3ef2d10dc13fcd",
  "gali_id": "692fc523a4e13db31f2bd925",
  "message": "Milk delivered, please collect!"
}

9)Update device token api 
http://localhost:5000/api/user/save-token
{
  "userId": "692fc573a4e13db31f2bd927",
  "token": "dYj3XNdiSu2lCwrRDuIQcQ:APA91bHjQxGfpOiNbefwJWxqMCwQEZl05JgSIFIXCu-Q_mt2PY_P4HiqFJztRZwrEWCVEBmhHVL0v_qrM7bFJYRfD1DnzYZdB6pIjWh7dMI4osxhRjk_-LM"
} 

10) User login Api by user mobile number 
http://localhost:5000/api/user/login
{
    "phone":"9876543280"
}
























