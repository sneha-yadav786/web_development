from flask import Flask, request , redirect , url_for , session , Response,render_template
app=Flask(__name__)
app.secret_key="mysecretcode"
#home page
@app.route("/", methods=["GET","POST"])
def login():
    if request.method=="POST":
        username=request.form.get("username")
        password=request.form.get("password")
        if username=="prateek" and password=="786":
            session["user"]=username
            return redirect(url_for("welcome"))
        else:
            return Response("Invalid username or password.")
    return render_template("index.html")   
# welcome window
@app.route("/welcome")
def welcome():
    if "user" in session:
        return render_template("welcome.html", name=session["user"])
    else:
        return redirect(url_for("login"))
#Logout
@app.route("/logout")
def logout():
    session.pop("user",None)
    return redirect(url_for("login"))

   
if __name__=="__main__":
    app.run(debug=True)