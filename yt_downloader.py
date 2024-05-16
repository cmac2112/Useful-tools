from pytube import YouTube

def download(url, path):
    #get input from user on url
    try:
        yt = YouTube(url) #create youtube object

        stream = yt.streams.get_highest_resolution() 
        print("Downloading...")
        stream.download(output_path=path) #begin download with savepath = userpath from before
        print("Downloaded sucess\n")
    except Exception as e:
        print("Error occurred somewhere:", str(e))

if __name__ == "__main__":
    user_url = input("Enter Valid Url From Youtube: ")
    print("If you wish to download the video to the downloads folder, enter 1")
    user_path = 'C://Users//ousoo//desktop//'
    download(user_url, user_path)