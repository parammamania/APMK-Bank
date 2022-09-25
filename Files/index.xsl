<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Learn and Earn</h2>
  <table border="2">
    <tr bgcolor="#CC3366">
		<th style="text-align: center; color: white; font-size: 20px; column-width: 200px;">Title</th>
		<th style="text-align: center; color: white; font-size: 20px; column-width: 200px;">Published On</th>
		<th style="text-align: center; color: white; font-size: 20px;">Content</th>
    </tr>
    <xsl:for-each select="catalog/cd">
    <tr>
      <td style="text-align: center;"><xsl:value-of select="topic"/></td>
      <td style="text-align: center;"><xsl:value-of select="date"/></td>
	  <td style="text-align: center;"><xsl:value-of select="content"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>