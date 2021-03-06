---
Mermaid 참고
[참고 링크](https://richwind.co.kr/147)

```mermaid
graph LR
A[Hard edge] -->B(Round edge)
b --> C{Decision}
C --> |One| D[Result one]
C --> |Two| E[Result Two]
```
---

# 2강 Node.js와 Express.js 다운로드 하기

```mermaid
graph LR

A[NODE JS와 EXPRESS JS 다운로드 하기]

B[NODE JS?] --> C[Node.js is an open- source, corss-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.]

D[EXPRESS JS?] --> E[Express.js or simply Express, is a web application framework for Node.js]
```

> Node.js 자바스크립트를 서버사이드에서 쓸 수 있도록 도움 주는 것
> Nojde.js가 엔진이라면, Express는 기타 요소(애플리케이션, 웹)를 추가해주는 프레임워크

```mermaid
graph TD

F[노드가 이미 다운되어 있는지 확인] --> G[node -v]
F --> H[npm init]
H --> I[새로운 or 존재하는 npm package 만들기]
H --> J[package.json]
J --> K[index.js]
K --> L[백엔드 시작점]
K --> M[express.js 다운 받기]
M --> N[node_module]
N --> O[다운 받은 dependencies들은 이 폴더에서 관리됨]
N --> P[index.js에서 기본적인 express js 앱 만들기]
P --> Q[https://expressjs.com/en/starter/hello-world.html]
```

## 다운로드 받기

```
node -v
```

[nodejs](nodejs.org)
-> 가급적이면 LTS 추천

```
npm init
```

- 폴더에서 npm 패키지 다운로드 받기위해서 해당 명령어 필요함!

```shell
package name: (code)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/Programming/00_Preparation/04_Nodejs/BoilerPlate/Code/package.json:

{
  "name": "code",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

해당 정보를 설정할 수 있음!

### Express 다운로드 받기

```
npm install express --save
```

```json
  "dependencies": {
    "express": "^4.17.1"
  }
```

> JSON에서 추가된 것을 확인할 수 있음.

### Express 다운받기

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

### npm 시작하기

```shell
npm run start
```

> "Example app listening at http://localhost:3000" 와 같이 나타나는 것을 확인할 수 있다.

> 해당 사이트 들어가게 되면 "Hello World"보여지는 것도 확인할 수 있음.

---

# 3강 Mongo DB 연결하기

```mermaid
    graph TD
    A[Mongo DB 연결]-->B[http://www.mongodb.com]
    A-->C[회원가입하기]
    C-->D[CLUSTER를 만들기]
    D-->E[몽고DB 유저 생성]
    E-->F[아이디 비번 기억하기!]
    E-->G[Mongoose 알아보기]
    G-->H[https;//www.npmjs.com/package/mongoose]
    H-->I[간단하게, 몽고DB를 편하게 쓸수 있는 Object Modeling Tool이다.]
    J
    K
```

### MongoDB 다운로드하기

> 이 강의에서는 안나왔는데, Organization 만들고, Project 만들어야 Cluster를 만들수가 있는 것 같다!

1. Build a Cluser
2. Freetier 선택
3. AWS 선택하고 그나마 가까운 Singapore 선택하고, M0 Sandbox 선택!
4. 이름 정하기
   그리고 build

5~7분 정도 걸린다.

### MongoDB 유저 생성

- 클러스터에서 connect 누르고 원하는 User / pw 정하면 됨!
- 쭉 진행하다가 connection application 누르고
- 나타난 코드 복사하기!

### Mongoose

- 몽고DB를 편하게 쓸수 있는 툴

```
npm install mongoose --save
```

### 커텍션 에러의 경우

> MongoDB 클러스터와의 연결이 안되서 찾아봤습니다. 이 강의를 보시는분중에서 "MognDB Connected..!" 에서 에러가 나시는분은 참고해보세요.MongoDB Atlas에서 Network Access에 들어가시면 IP Address가 하나가 할당되어있습니다만, 제 IP Address와 다른 IP로 할당되어 있더라구요.(저는 외부에서 작업해서 그런것일수도..)우측의 초록색 ADD IP ADDRESS를 누르신 후, include your current IP address로 할당하시면 해결됩니다.처음에는 OS X기준 시스템 환경설정에서 네트워크의 IPv4 IP로 할당해도 안되어서 고민했는데, Atlas의 current IP address로 자체할당 하니 되더군요.

---

# MongoDB Model & Schema

## Model이 무엇?

- Model은 Schema를 감싸주는 역할
  > A Mongoose model is a wrapper on the Mongoose schema.
  > A Mongoose schema defines the structure of the document, default values, validators, etc. ,whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

## Schema가 무엇?

- Schema는

```js
const mongoos = require("mongoose");

const userSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);
```

---

# Git 설치하기

1. Git 설치되었는지 확인하기(git --version)
2. 다운로드(https://git-scm.com)
3. git init
4. git status
5. Working Directory -(git add)-> Staging Area -(git commit)->Git Repository(LOCAL) -(git push)->Git Repository()

- 혹시나 추가한 거 지우고 싶을떄

```
git rm --cached "원하는 파일"
```

Git Vs GitHub

- Git is a version control system, a tool to manage your source code history.

- Github is a hosting service for Git repositories

So they are not the same thing: Git is the tool, Github is the service for projects that use Git.

## GitHub

1. Github 회원가입 하기
2. New Repository 만들기 (New 버튼)
3. 안전하게 통신하기 위해 SSH를 설정함 (Secure Shell)
   3-1. 이미 설정된 SSH 확인하기 (ls -a ~/.ssh)

4. SSH 설정(구글 GIT SSH 쳐서 사이트 들어가기)

5. SSH KEY를 만든다.
6. SSH Agent를 BACKGROUND에 킨다.
7. SSH Private Key를 SSH-AGENT에 넣는다.
8. 생성된 SSH Public Key를 3rd Party(깃헙 등)에 준다.
9. 이를 통해서 현재 컴퓨터와 깃허브 서버간에 안전하게 통신할 수 있게 된다.
   [참고사이트](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

---

# Heroku 서비스를 이용하여 MERN 스택 앱을 배포하기

## What is Heroku?

> Heroku is a container-based cloud platform as a Sevice(PaaS). Developers use Heroku to deploy, manage, and scale modern apps. Heroku is elegant, flexible and easy to use, offering developers to simplest path to getting their apps to market.

> Heroku is fully managed, giving developers the freedom to focus on their core product without the distraction of maintaing servers, hardware, or infrastructure. The Heroku experience provides services, tools, workflows, and polyglot support-all designed to enhance developer productivity.

1. Download App file from Github
2. Connect mongoDb to our App
3. Download Heroku CLI -> Check "heroku -v"
4. heroku login
5. heroku create
6. create heroku

[heroku](https://devcenter.heroku.com/)

[heroku-CLI](https://devcenter.heroku.com/articles/heroku-cli)

7. Make Configuration for heroku deployment inside package.json

- specify npm and node version
- For FrontEnd Deployment

8. Put Environment Variable for Production Mode in Heroku Websites
   (npm instlall
   npm run build)
9. Push our code to Github
