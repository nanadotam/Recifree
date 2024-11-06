# CS 341 - WebTechnologies

# LabAssignment 5

# Due: 10 thNovember 2024

# Thisassignmentisdesignedforyoutoimplementbackendlogicanddatabase

# integrationforourrecipe-sharingplatformproject'sauthenticationsystemand

# admindashboard.Youwillfocusonrole-basedaccesscontrol,user

# management,andanalytics.

# AshesiHonorCodeapplies!

# Instructions

Yourtaskistoimplementthebackendfunctionalityforthe **AuthenticationSystem** (Login
andRegistration)andcreatea **Dashboard/Analytics** pagefordifferentuserroles(Super
Admin(role=1)andRegularAdmin(role=2))inourSimpleRecipeSharingPlatform
project.Thisisthefifthstepinbuildingourwebapplication.YouwillbeworkingwithPHP
andMySQLforthebackendimplementation.

# YoucanuseanyCSSframework,plugin,orlibraryforstylinginthisexercise.

# YoucanincorporateJavaScriptlibrariesforinteractivityanddesign,butavoid

# usingframeworkslikeReact,Next.js,andVue.

# SimpleRecipe-SharingPlatform

**Instructions:**

Thislabwillfocusonimplementingbackendlogicfortherecipe-sharingplatform:

1. **AuthenticationSystem** :Implementthebackendlogicforregisteringandlogin
2. **Role-BasedAccessControl** :Addrole-basedaccesscontrolforthetwotypesof
    admins(SuperAdminandAdmin(regularadmin))
3. **Dashboard/Analytics** :Implementdashboardanalytics,suchasdisplayingthetotal
    numberofusersinthedatabase.
4. **UserManagementPage** :Implementthedisplayanddeletionofusersbyonlythe
    superadmin.

**Requirements:**

**1.DatabaseSetup**

```
● Usetheprovidedrecipe-schema.sqlfiletosetupyourdatabase
● TheSQLfilecontainsthenecessarytablesfor:
○ Users
○ Recipes
○ Foods
○ etc.
```

```
● YoucanimporttheSQLscriptusingPHPMyAdmin,MySQLWorkbench,oranyother
DBMSyouuseforlocaldevelopment.
```
**2.AuthenticationSystem(Backend)**

```
RegistrationPage(register.php):
```
```
● Implementserver-sidevalidationforallregistrationfields
● Hashpasswordsbeforestoringtheminthedatabase
● Settheinitialuserroleas 2 (regularadmin)
● Storeuserregistrationtimestamp(created_atandupdated_at)
● Usepreparedstatementsfordatabaseoperationsorqueries
● Handleduplicateemailaddresses
● Returnappropriatesuccess/errormessages
```
```
LoginPage(login.php):
```
```
● Implementserver-sidevalidation
● Verifyusercredentialsagainstthedatabase
● Implementsessionmanagement (Trackuser_id, fname,lname,role)
● Redirecttotheappropriatedashboardbasedontheuserrole
● Handleinvalidloginattempts
● Returnappropriateerrormessages
```
**3.Role-BasedDashboard(dashboard.php)**

Implementasingledashboardpagethatdisplaysdifferentcontentbasedonuserrole:

```
ForSuperAdmin:
```
```
AccessandPermissions:
```
```
● Viewallsystemanalytics
● Manageuserapprovals
● Deleteusers
● Viewallrecipes
```
```
DashboardContent:
```
1. AnalyticsSection
    ○ Totalnumberofusersinthesystem
    ○ Totalnumberofrecipesacrossallusers
    ○ Numberofpendinguserapprovals
    ○ System-widestatistics
2. UserManagementSection
    ○ Tableshowingalluserswith:
       ■ Fullname
       ■ Email
       ■ Role
       ■ Status
       ■ Registrationdate
    ○ Abilitytodeleteusers


3. RecipeOverview
    ○ Listofrecentlyaddedrecipes(allusers)
    ○ Totalrecipecount
4. Optional:AnalyticsCharts
    ○ Userregistrationtrends
    ○ Recipesubmissiontrends
    ○ Userapprovalstatusdistribution

```
ForRegularAdmin:
```
```
AccessandPermissions:
```
```
● Viewonlypersonalanalytics
● Manageonlytheirownrecipes
● Nousermanagementaccess
```
```
DashboardContent:
```
1. PersonalAnalyticsSection
    ○ Totalnumberofrecipesaddedbytheadmin
    ○ Theirrecentrecipesubmissions
2. RecipeManagementSection
    ○ Listoftheirrecipes
    ○ Recipestatusandstatistics
3. Optional:PersonalAnalyticsCharts
    ○ Personalrecipesubmissiontrends
    ○ Recipecategorydistribution

**4.UserManagementSystem**

**UserListingPage(users.php):**

ForSuperAdminonly:

```
● Displayallusersinatableformatshowing:
○ Fullname
○ Email
○ Role
○ Registrationdate(CreatedAt)
● Implementuserdeletionfunctionality
● Addpaginationfortheuserlist(Optional)
```
**SecurityRequirements:**

```
● Implementinputsanitization
● Usepreparedstatementsforalldatabasequeries
● Implementpropersessionmanagement
● Validateuserrolesforeachprotectedpage
● Securepasswordstorageusingproperhashing
```

**ErrorHandling:**

```
● Implementpropererrorhandlingfor:
○ Databaseconnectionfailures
○ Invalidqueries
○ Authenticationfailures
○ Authorizationfailures
○ Invalidinputdata
```
**SubmissionGuidelines** :

- Submita **zipfilecontainingallprevioussubmissions(completeapp)andinclude
dashboard.php(DashboardPage), register.php(RegisterPage),users.php**

**(UserManagement Page),andrecipes.php(RecipeManagement Page).**

- Ensureyourfileisnamedappropriately(e.g.,login.php).

**EvaluationCriteria:**

```
● Properimplementationofauthenticationsystem(25%)
● Correctrole-basedaccesscontrol(20%)
● Dashboardfunctionalityandanalytics(20%)
● Usermanagementimplementation(15%)
● Codequalityandorganization(10%)
● Securitymeasuresimplementation(10%)
```
Remember,thisisthefifthpartofanincrementalproject.Infuturesubmissions,you'llbe
addingfunctionalityandexpandingthefeaturesoftherecipe-sharingplatform.

# ProjectDescription(forreference):

Createabasicrecipe-sharingplatformwhereuserscanregister,login,sharerecipes,save
favorites,andleavecomments.ThisprojectwillallowyoutopracticeCRUDoperations,user
authentication,androle-basedaccesscontrolwhileworkingonapracticalapplication.

KeyFeatures( **tobeimplementedinfuturesubmissions** ):

1. RecipeManagement
2. RecipesSearchandDisplay
3. CommentSystem
4. SimpleUserInterface

**Goodluck** ,andfeelfreetoaskquestionsifyouneedclarificationonanypartofthe
assignment!


