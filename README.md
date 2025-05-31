# Meet

Meet is a modern web application for online meetings, collaboration, and video conferencing. Built with Next.js, TypeScript, and Tailwind CSS, it provides a seamless and interactive user experience.

## Features
- User authentication (login, register, forgot password)
- Video conferencing and collaboration tools
- Responsive and accessible UI
- Modular component structure
- Modern design with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm (or npm/yarn)

### Installation
1. Clone the repository:
   ```powershell
   git clone <your-repo-url>
   cd meet
   ```
2. Install dependencies:
   ```powershell
   pnpm install
   ```

### Running the Development Server
```powershell
pnpm dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production
```powershell
pnpm build
```

### Starting the Production Server
```powershell
pnpm start
```

## Project Structure
- `app/` - Next.js app directory (pages, layouts, routes)
- `components/` - Reusable React components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions
- `public/` - Static assets (images, videos)
- `styles/` - Global styles
- `videos/` - Video assets



# Meetio API

Note: 
1. Each request need an Authorization header, which returns after login


<p>
    <a href="#">
        <div>
            <img src="https://miro.medium.com/v2/resize:fit:3200/1*nBbb3oVqPH1g5Que9_VqbA.png" width="100%" alt="Django" />
        </div>
    </a>
</p>


## Status Code
```
200 : Success
400 : Error
403 : Access Denied/Token Validation Error
```

## API Link
```
https://meetio.jazyen.com/
```

## Admin Parameters
```
Email: admin@meetio.com
Password: 123456
```
### Authentication
Name | Endpoint | Method | JSON Object | Required Fields | Responds
|:---|:---|:---|:---|:---|:---|
| [Login](https://meetio.jazyen.com/login) | `login` | POST | No | email, password | Auth Token, Userid, Role
| [Change Password](https://meetio.jazyen.com/change_password) | `change_password` | POST | No | email, old_password, new_password | message
| [Reset Password](https://meetio.jazyen.com/reset_password) | `reset_password` | POST | No | email | message

### Users
Name | Endpoint | Method | JSON Object | Required Fields
|:---|:---|:---|:---|:---|
| [Schedule Meeting](https://meetio.jazyen.com/meeting/schedule) | `meeting/request` | POST | No | date, recipiant 

**[⬆ Back to Users API](#Users)**
<br >
<br >


### Admin
Name | Endpoint | Method | JSON Object | Required Fields
|:---|:---|:---|:---|:---|
| [Create Admin Account](https://meetio.jazyen.com/staff/create) | `admin/create` | POST | Yes | firstname, lastname, dob, phone, email  //dob format: 2025-01-30
| [Update Admin Info](https://meetio.jazyen.com/staff/update) | `admin/update` | PUT | Yes | userid, firstname, lastname, dob, email, address
| [Delete Admin](https://meetio.jazyen.com/staff/delete) | `admin/delete` | DELETE | No | userid
| [Get All Users](https://meetio.jazyen.com/staff/get_all) | `users/get_all` | GET | No | -
| [Get All Admin Users](https://meetio.jazyen.com/staff/get) | `admin/get_all` | GET | No | -
| [Send Memo/Mail](https://meetio.jazyen.com/leave/delete) | `mail/send` | POST | Yes | category, message, subject, recepient
| [Add Birthday Message](https://meetio.jazyen.com/birthday/create) | `birthday/create` | POST | Yes | message
| [Update BD Message](https://meetio.jazyen.com/birthday/update) | `birthday/update` | POST | Yes | message, id
| [Get All BD Messages](https://meetio.jazyen.com/birthday/get_all) | `birthday/get_all` | GET | No | -
| [Delete BD Message](https://meetio.jazyen.com/birthday/delete) | `birthday/delete` | POST | No | id
| [Get Sent Bulk SMS](https://meetio.jazyen.com/sms/get) | `sms/get` | GET | No | from, to
| [Send SMS Bulk SMS](https://meetio.jazyen.com/sms/send) | `sms/send` | POST | No | message, deliveryTime, phone

**[⬆ Back to Admin's API](#Admin)**
<br >
<br >


## License
For private use only.


