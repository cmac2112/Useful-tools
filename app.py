from flask import Flask,render_template, request 
  
app = Flask(__name__,template_folder="templates") 
  
@app.route("/") 
def hello(): 
    return render_template('index.html') 
  
@app.route('/process', methods=['POST']) 
def process(): 
    data = request.form.get('data') 
    # process the data using Python code 
    result = data.upper() 
    res_list = list(result)
    res_list[2] = 'X' #testing manipulation
    new_res = ''.join(res_list)
    return new_res
  
if __name__ == '__main__': 
    app.run(debug=True)