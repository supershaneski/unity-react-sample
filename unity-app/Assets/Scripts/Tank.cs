using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Tank : MonoBehaviour
{

    bool m_rotateTank;

    // Start is called before the first frame update
    void Start()
    {
        m_rotateTank = true;
    }

    // Update is called once per frame
    void Update()
    {
        if(m_rotateTank)
        {
            transform.Rotate(new Vector3(0, 180, 0) * (0.1f * Time.deltaTime));
        }
    }

    public void Play()
    {
        m_rotateTank = true;
    }

    public void Stop()
    {
        m_rotateTank = false;
    }
}
