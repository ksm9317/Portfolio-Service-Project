import React, { useState, useEffect } from 'react';
import CertificateCard from './CertificateCard';
import * as Api from '../../api';

function Certificate({ portfolioOwnerId, isEditable }) {
  return <CertificateCard isEditable={isEditable}></CertificateCard>;
}

export default Certificate;
