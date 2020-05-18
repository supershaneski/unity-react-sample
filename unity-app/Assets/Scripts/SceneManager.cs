using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System;
using System.Text;
using UnityEngine;
using UnityEngine.UI;

public class SceneManager : MonoBehaviour
{
    public GameObject m_Tank;

    public Button m_DefaultButton;
    public Button m_RedButton;
    public Button m_BlueButton;

    public Toggle m_Rotate;

    public Text m_Title;
    public Text m_Rank;
    public Text m_Power;
    public Text m_Armor;
    public Text m_Speed;

    string m_defaultColor = "";
    string m_currentTitle = "";
    int m_currentRank = 0;
    int m_currentPower = 0;
    int m_currentArmor = 0;
    int m_currentSpeed = 0;
    bool m_playRotate = true;

    private class ParamClass
    {
        public int index;
        public string args;

        public ParamClass()
        {
            //
        }

        public ParamClass(int n, string s)
        {
            index = n;
            args = s;
        }
    }

    private string[] GetParametersFromArgs(string s)
    {
        s = s.Substring(1);
        s = s.Substring(0, s.Length - 1);
        return s.Split(',');
    }
    
    [DllImport("__Internal")]
    public static extern void SetRetValue(int index, string param);
    
    [DllImport("__Internal")]
    public static extern void OnRotationPlay();
    [DllImport("__Internal")]
    public static extern void OnRotationStop();
    [DllImport("__Internal")]
    public static extern void OnChangeColor(string color);
    [DllImport("__Internal")]
    public static extern void OnLoad();
    
    void Start()
    {

        _SetTitle("Super Tank");

        _SetRank(3);
        _SetPower(50);
        _SetArmor(30);
        _SetSpeed(45);

        _SetTankColor("#EE66AA");

        Button btnDef = m_DefaultButton.GetComponent<Button>();
        btnDef.onClick.AddListener(delegate { _SetTankColor("#00FF00"); });

        Button btnRed = m_RedButton.GetComponent<Button>();
        btnRed.onClick.AddListener(delegate { _SetTankColor("#FF0000"); });

        Button btnBlue = m_BlueButton.GetComponent<Button>();
        btnBlue.onClick.AddListener(delegate { _SetTankColor("#0000FF"); });

        Toggle toggle = m_Rotate.GetComponent<Toggle>();
        toggle.onValueChanged.AddListener(SetRotation);

        #if !UNITY_EDITOR
            OnLoad();
        #endif

    }

    // Property
    public void GetTankProperty(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);

        string propName = obj.args;
        int value = 0;

        switch(propName.ToLower())
        {
            case "rank":
                value = m_currentRank;
                break;
            case "power":
                value = m_currentPower;
                break;
            case "armor":
                value = m_currentArmor;
                break;
            case "speed":
                value = m_currentSpeed;
                break;
            default:
                value = -1;
                break;
        }

        
        #if !UNITY_EDITOR
            SetRetValue(obj.index, value.ToString());
        #else
            Debug.Log(propName + ": " + value);
        #endif
        

    }

    // Rotation
    void SetRotation(bool state)
    {
        Tank tank = m_Tank.GetComponent<Tank>();
        if (state)
        {
            tank.Play();
            
            #if !UNITY_EDITOR
                OnRotationPlay();
            #endif
            
        }
        else
        {
            tank.Stop();

            #if !UNITY_EDITOR
                OnRotationStop();
            #endif

        }

        m_playRotate = state;
    }
    public void Play()
    {
        SetRotation(true);

        Toggle toggle = m_Rotate.GetComponent<Toggle>();
        toggle.isOn = true;

        #if !UNITY_EDITOR
            OnRotationPlay();
        #endif

    }
    public void Stop()
    {
        SetRotation(false);

        Toggle toggle = m_Rotate.GetComponent<Toggle>();
        toggle.isOn = false;

        #if !UNITY_EDITOR
            OnRotationStop();
        #endif

    }

    // Rank
    public void SetRank(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);

        int rank = int.Parse(obj.args);
        
        _SetRank(rank);
        
    }
    void _SetRank(int value)
    {
        Text text = m_Rank.GetComponent<Text>();

        if (value <= 1) value = 1;
        if (value > 5) value = 5;

        text.text = value.ToString();

        m_currentRank = value;
    }
    public void GetRank(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);
        
        #if !UNITY_EDITOR
            SetRetValue(obj.index, m_currentRank.ToString());
        #else
            Debug.Log("Rank: " + m_currentRank);
        #endif
        

        //return m_currentRank;

    }

    // Power
    public void SetPower(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);

        int power = int.Parse(obj.args);
        
        _SetPower(power);

    }
    void _SetPower(int value)
    {
        if (value < 0) value = 0;
        if (value > 100) value = 100;

        Text text = m_Power.GetComponent<Text>();
        text.text = value.ToString();

        m_currentPower = value;
    }
    public void GetPower(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);
        
        #if !UNITY_EDITOR
            SetRetValue(obj.index, m_currentPower.ToString());
        #else
            Debug.Log("Power: " + m_currentPower);
        #endif
        

        //return m_currentPower;
    }

    // Armor
    public void SetArmor(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);

        int armor = int.Parse(obj.args);
        
        _SetArmor(armor);

    }
    void _SetArmor(int value)
    {
        if (value < 0) value = 0;
        if (value > 100) value = 100;

        Text text = m_Armor.GetComponent<Text>();
        text.text = value.ToString();

        m_currentArmor = value;
    }
    public void GetArmor(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);
        
        #if !UNITY_EDITOR
            SetRetValue(obj.index, m_currentArmor.ToString());
        #else
            Debug.Log("Power: " + m_currentArmor);
        #endif
        

        //return m_currentArmor;
    }

    // Speed
    public void SetSpeed(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);

        int speed = int.Parse(obj.args);
        
        _SetSpeed(speed);
    }
    public void _SetSpeed(int value)
    {
        if (value < 0) value = 0;
        if (value > 100) value = 100;

        Text text = m_Speed.GetComponent<Text>();
        text.text = (value.ToString())+" mph";

        m_currentSpeed = value;
    }
    public void GetSpeed(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);
        
        #if !UNITY_EDITOR
            SetRetValue(obj.index, m_currentSpeed.ToString());
        #else
            Debug.Log("Power: " + m_currentSpeed);
        #endif
        

        //return m_currentSpeed;
    }

    // SetTitle
    public void SetTitle(string param)
    {
        
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);

        string title = obj.args;

        _SetTitle(title);

    }

    public void _SetTitle(string newText)
    {
        
        Text text = m_Title.GetComponent<Text>();
        text.text = newText;

        m_currentTitle = newText;
    }
    public void GetTitle(string param)
    {

        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);
        
        #if !UNITY_EDITOR
            SetRetValue(obj.index, m_currentTitle);
        #else
            Debug.Log("Title: " + m_currentTitle);
        #endif
        

        //return m_currentTitle;
    }

    // SetTankColor
    public void SetTankColor(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);

        string color = obj.args;

        _SetTankColor(color);
    }
    void _SetTankColor(string hexColor)
    {
        Color newCol;
        if (ColorUtility.TryParseHtmlString(hexColor, out newCol)) {
            
            MeshRenderer[] renderers = m_Tank.GetComponentsInChildren<MeshRenderer>();
            for (int i = 0; i < renderers.Length; i++)
            {
                renderers[i].material.color = newCol;
            }

            m_defaultColor = hexColor;

            #if !UNITY_EDITOR
                OnChangeColor(m_defaultColor);
            #endif


        }
    }

    public void GetTankColor(string param)
    {
        ParamClass obj = new ParamClass();
        obj = JsonUtility.FromJson<ParamClass>(param);
        
        #if !UNITY_EDITOR
            SetRetValue(obj.index, m_defaultColor);
        #else
            Debug.Log("Color: " + m_defaultColor);
        #endif
        

        //return m_defaultColor;
    }


}
