"use client";

import Link from "next/link";
import { Download as DownloadIcon } from 'lucide-react';

import "./Download.scss";

const Download = () => {
  
  return (
    <Link
      href="/cv"
      className="Download"
    >
      <DownloadIcon strokeWidth={ 1.5 } />{ "CV" }
    </Link>
  )
}

export default Download;