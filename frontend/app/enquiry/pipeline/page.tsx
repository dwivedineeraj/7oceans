'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { getLeads, getPipelines, getSubjects } from '@/lib/common'

export default function Pipeline() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [pipelines, setPipelines] = useState<Pipeline[]>([])

  useEffect(() => {
    const getEnquiryData = async () => {
      setLeads(await getLeads())
      setPipelines(await getPipelines())
      setSubjects(await getSubjects())
    }
    getEnquiryData()
  }, []);

  return <>
    boom boom boomer
  </>
}