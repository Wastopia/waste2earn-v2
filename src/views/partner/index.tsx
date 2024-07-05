import { useEffect } from 'react';
import { Widget } from '@typeform/embed-react';
import { Col, Row, Typography, Image, Space } from 'antd';
import powerUpDarkPng from '../../assets/images/getcert/power-up-dark.png';
import productIntegrationDarkPng from '../../assets/images/getcert/product-integration-dark.png';
import coPoolDarkPng from '../../assets/images/getcert/co-pool-dark.png';
import coMarketingDarkPng from '../../assets/images/getcert/co-marketing-dark.png';

interface Benefit {
  logo: string;
  title: string;
  description: string;
}

const BENEFIT: { list: Benefit[] } = {
  list: [
    {
      logo: powerUpDarkPng,
      title: 'Shape a Sustainable Future',
      description:
        'Join our mission to revolutionize waste management! Partner with Waste2Earn and contribute to a cleaner planet through innovative blockchain technology. Fill out our form for details!',
    },
    {
      logo: productIntegrationDarkPng,
      title: 'Unlock New Revenue Streams',
      description:
        'Expand your reach and tap into a growing market. Our Waste2Earn platform offers unique opportunities to generate revenue while promoting environmental responsibility.',
    },
    {
      logo: coPoolDarkPng,
      title: 'Empower Communities & Drive Impact',
      description:
        "Be a part of the solution! Partner with us to empower waste collectors, create jobs, and foster a circular economy in local communities and start to create a Material Recycling Facility",
    },
    {
      logo: coMarketingDarkPng,
      title: 'Gain Recognition as a Sustainability Leader',
      description:
        'Showcase your commitment to environmental stewardship. Partnering with Waste2Earn positions your brand at the forefront of the sustainability movement.',
    },
  ],
};

const TYPE_FORM_ID = 'https://7rv0gkq8a89.typeform.com/to/imbardDe';

const Content: React.FC<Benefit> = ({ title, description, logo }) => (
  <Row gutter={[32, 32]} style={{ textAlign: 'center' }}>
    <Col span={24} style={{ marginTop: '30px' }}>
      <Image src={logo} preview={false} alt={title} /> {/* Add alt for accessibility */}
    </Col>
    <Col span={24}>
      <Space direction="vertical">
        <Typography.Title level={3}>{title}</Typography.Title>
        <Typography.Text type="secondary">{description}</Typography.Text>
      </Space>
    </Col>
  </Row>
);


const BecomePartner: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Row
      gutter={[50, 50]} // Adjusted gutter for larger screens
      className="body-content become-partner"
    >
      <Col span={24} style={{ textAlign: 'center', color: '#ffffff', paddingInline: '50px' }}>
        <Typography.Title level={1} style={{ lineHeight: '30px' }} >
          Be an ESG Certified Partner <span style={{ color: '#059212' }}>with Waste2Earn</span>
        </Typography.Title>
        <Typography.Text type="secondary">Join us in our mission to create a sustainable future. Become an Environmental, Social, and Governance (ESG) certified partner and make a positive impact.</Typography.Text>
      </Col>

      <Col span={24} style={{ textAlign: 'center', color: '#ffffff' }}>
        <Row gutter={[24, 64]} style={{ padding: '30px' }}>
          {BENEFIT.list.map((item) => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.title}>
              <Content {...item} />
            </Col>
          ))}

          <Col xs={24} sm={24} md={12} lg={12} style={{ marginTop: '40px' }}>
            <Typography.Title level={1}>Sign Up Form</Typography.Title>
            <Typography.Text type="secondary">
              Fill the form below to start your ESG journey with us!
            </Typography.Text>
            <div style={{ height: 800, marginTop: '20px' }}>
              <Widget id={TYPE_FORM_ID} style={{ width: '100%', height: '100%' }} />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BecomePartner;
