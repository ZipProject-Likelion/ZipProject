import React, {useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from "react-avatar-edit";
import Grid from "@material-ui/core/Grid";



const SecondOnboard =({nextStage, handleChange, handleImageChange, setIndex, prevStage}) =>{
    const [image, setImage]=useState();
    const [preview, setPreview]= useState(false);
    const [isSave, setIsSave]=useState(false);
    const onClose =()=>{
        setPreview(false);
    }
    const onCrop =(image) =>{
        setImage(image);
    }
    const onBeforeFileLoad= (elem) => {
        if (elem.target.files[0].size > 71680) {
          alert("File is too big!");
          elem.target.value = "";
        }
    }

    const onChangeImage =(e) =>{
        handleImageChange(e);
        setImage(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    return (
        <>
        <div className="second-onboard-container">
        <div>
            <h2 className="onboard-title">
                ZIP 에 오신 것을 환영합니다!
            </h2>
            <p className="onboard-subtitle">프로필 사진과 
            이름 대신 사용할 닉네임을 설정해주세요.</p>
        </div>
        <div>
            {!preview ?(
                <div
                style={{
                    margin: "0 auto",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                <Avatar
                    width={"100%"}
                    height={295}
                    onCrop={onCrop}
                    onClose={onClose}
                    src={image}
                />
                {image&&
                 <div
                 style={{ margin: "20px auto", width: "30%", textAlign: "center" }}
                 >
                <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     onClick={()=>setPreview(true)}>
                     CROP
                </Button>
                 </div>
                }
               
            </div>
            ):
            (
                <div
                style={{
                    margin: "0 auto",
                    width: "80%",
                    textAlign: "center"
                  }}
                >
                <img src={image} alt="Preview"/>
                </div>
            )
            }
        <div
         style={{ margin: "20px auto", width: "100%", textAlign: "center" }}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="최대 8글자"
            id="nickname"
            name="nickname"
            onChange={handleChange}
        />
        </div>

        </div>
        <Grid container>
          <Grid item xs= {12} sm={6}>
              <Button
              onClick={()=>{
                prevStage()
              }}
              fullWidth
              variant="contained"
              className="onboard-btn"
              
            >
              이전으로
            </Button>
          </Grid>
          <Grid item xs= {12} sm={6}>
              <Button
              onClick={()=>{
                nextStage(3)
                setIndex(2)
              }}
              fullWidth
              variant="contained"
              className="onboard-btn"
              
            >
              다음으로
            </Button>
          </Grid>
        </Grid>
        </div>
       
        </>
    )
}

export default SecondOnboard;
