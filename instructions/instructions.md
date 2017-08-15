# Popscoot Admin User Guide
URL: [test.popscoot.com/popscoot/admin](http://test.popscoot.com/popscoot/admin"POPSCOOT")

Official site: [http://popscoot.com/](http://popscoot.com/"popscoot.com")

Version: 0.01

Author: Viatick

## Content:
* [Authentication](#Authentication)
    * [Login](#Login)
    * [Register](#Register)
    * [Forget Password](#Forget Password)
* [General Operations](#General)
    * [Navigation](#Navigation)
    * [Filter headers](#Filter)
    * [Image upload](#Image Upload)
* [Main Pages](#Main)
    * [Dashboard/home page](#Dashboard)
    * [Accounts](#Accounts)
    * [Scooters](#Scooters)
    * [Bookings](#Bookings)
    * [Enquiries](#Enquiries)
    * [Banks](#Banks)
    * [Payments](#Payments)

#### <a name="Authentication"></a>Authentication
##### <a name="Login"></a>Login
key in your username (case insensitive) and password to log in to the admin system. Login button is disabled if either field is left empty
![login][login]

##### <a name="Forget Password"></a>Forget password:
In case of forgetting password, click on forget password link and key in your email registered with our system. Send email button will be disabled if email is empty or in wrong format
![forget password][forget password]

Click on send email button, you will be redirected to an update password page and receive a email that contains a 4*character secret key. Key in the secret key and your new desired password to update your password. Change password button is disabled if either field is left empty. You will be redirected to login page after update is done. 
![change password][change password]

##### <a name="Register"></a>Register:
key in your email, username, and password (2 times). You will be redirected to login page upon successful registration. Register button will be disabled if 2 passwords mismatch, or if email is in a wrong format. Error will be shown if other users have already taken your registering username or email.
![register][register]

#### <a name="General"></a>General
##### <a name="Navigation"></a>General Navigation:
Side navigation: Click on the buttons to navigate to your desired page. “Popscoot” logo on top will navigate you to popscoot official website.
Toolbar: Click on avatar on top right corner to toggle user menu, where you can access and modify your particulars in your profile page and log out of the system. Click on gears to select language (simplified Chinese work in progress). While browsing through different pages, a series of link buttons will appear in the toolbar (breadcrumbs), you can click on buttons to navigate to pages you visited earlier. When the links get too long, the later ones will be hidden. You can make the series shorter by clicking on buttons in front

##### <a name="Filter"></a>Filter headers:
Click on the plus button to add a new entry. You can select number of items per page and the order of the elements from the dropdowns in the middle. In order drop down, by clicking on the order parameter again will put the items in reverse of the same ordering parameter. You can type any keyword in the search field.
![filter header][filter]

##### <a name="Image Upload"></a>Image upload:
Images in our system (including avatars for accounts, scooters, images for promotions and helps (work in progress)) are changeable. Click on the camera icon on the top left corner, an image upload area will show up. After successful upload of a new image, remember to click on update button to update the item.
![image upload][image upload]

#### <a name="Main"></a>Main fuctions
##### <a name="Dashboard"></a>Dashboard/Home page:
Upon successful login, you will be redirected to admin dashboard. The map shows location information of all scooters. Charts below show simple performace statistics. … button can navigate you to respective pages.
![dashboard][dashboard]

##### <a name="Accounts"></a>Account
###### Accounts page:
Shows you all the registered accounts in Popscoot system. You can see a brief preview of all accounts in this page. Click on details button to navigate to this user’s profile page where you can edit user’s particulars and create other items related to this user (refer to account detail page). The pink color switch indicates activation status. Click on it to activate/deactivate users.
![accounts page][accounts]
###### Account page:
Left side shows you a detailed profile of the user where you can change certain particulars. Our system allows **birthday, avatar and activation status** to be changed. When deleting an account, you need to type in the username of the account you wish to delete in the dialog. This is to prevent accidental deletion.
Right side gives you information on this user’s usage. You can see all items related to this user and add more items. Promotion page (working in progress) shows you all the promotions this user has applied. Click on plus button to see all promotions applicable to this account. In the popup, click on apply to apply the promotion to this user.
![account page][account]

#### <a name="Scooters"></a>Scooters
###### Scooters page:
Shows you all the registered scooters in Popscoot system. You can see a brief preview of all scooters in this page. The pink color switch indicates activation status. Click on it to activate/deactivate scooters.
![scooters page][scooters]
###### Scooter page: 
Left side shows details of the scooter. Our system allows **integrate ID, name, model, image and activation status** to be changed. Click on tracking to see location information of this scooter in a map. You can power this scooter using the two power buttons. When deleting a scooter, you need to type in the integrate ID of the scooter you wish to delete in the dialog.
Right side gives you information on this scooter's bookings. You can add booking to this scooter by clicking plus button
![scooter page][scooter]

##### <a name="Bookings"></a>Bookings
###### Bookings page:
Shows you all the bookings in Popscoot system. You can see a brief preview of all scooters in this page. You can navigate to detail pages of the scooter and user involved in this booking.
![bookings page][bookings]

###### Booking page: 
Shows details of the booking. Our system allows **outsetLockId, destinationLockId, start, end, price remarks and status** to be changed. Click on scooter or user button to navigate to their detail pages. You can start, stop and cancel a booking by using the button below. Note when changing status, a started booking can only be stoped, an unstarted booking can be started or canceled, while a stoped or canceled booking cannot have any status change. Other parameters can be changed at anytime. When deleting a booking, you need to type in the booking ID of the booking you wish to delete in the dialog.
![booking page][booking]

##### <a name="Enquiries"></a>Enquiries
###### Enquiries page:
Shows you all the enquiries in Popscoot system. You can see a brief preview of all enquiry in this page. You can navigate to detail pages of the user filing this enquiry. The pink color switch indicates open/close status. Click on it to open/close a enquiry.
![enquiries page][enquiries]

###### Enquiry page: 
Shows details of the enquiry. Our system allows **open/close status** to be changed. Click on user button to navigate to detail page. When deleting a enquiry, you need to type in the enquiry ID of the enquiry you wish to delete in the dialog.
![enquiry page][enquiry]

##### <a name="Banks"></a>Banks
###### Banks page:
Shows you all the banks in Popscoot system. You can see a brief preview of all banks in this page. You can navigate to detail pages of the owner.
![banks page][bank]

###### Bank page: 
Shows details of the bank. Our system allows **stamps, deposit and cash** to be changed. Click on user button to navigate to detail page. When deleting a bank, you need to type in the bank ID of the bank you wish to delete in the dialog.
![bank page][bank]

##### <a name="Payments"></a>Payments
###### Payments page:
Shows you all the payments in Popscoot system. You can see a brief preview of all payments in this page.
![payments page][payments]

###### Payment page: 
Left side shows details of the payment. Our system allows **method and 3 credentials** to be changed. Click on user button to navigate to detail page. When deleting a payment, you need to type in the payment ID of the payment you wish to delete in the dialog.

Right side shows transaction history under this payment (work in progress). Our system **does not** allow change, deletion or addition of new entry to transactions.
![payment page][payment]

[login]:img/login.png
[register]:img/register.png
[forget password]:img/forgetpassword.png
[change password]:img/updatepassword.png
[navigation]:img/navigation.png
[image upload]:img/imageupload.png
[filter]:img/filter.png

[dashboard]:img/dashboard.png
[accounts]:img/accounts.png
[account]:img/account.png
[scooters]:img/scooters.png
[scooter]:img/scooter.png
[bookings]:img/bookings.png
[booking]:img/booking.png
[enquiries]:img/enquiries.png
[enquiry]:img/enquiry.png
[banks]:img/banks.png
[bank]:img/bank.png
[payments]:img/payments.png
[payment]:img/payment.png